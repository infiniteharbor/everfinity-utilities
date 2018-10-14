import * as Knex from "knex";
import { ValidationError, validate } from "class-validator";

import { DatabaseObject } from "./abstract.dbo";
import { RepositoryValidationGroup } from "./enums";


export abstract class Repository {

  readonly knex: Knex;
  readonly tableName: string;

  constructor(knex: Knex, tableName: string) {
    this.knex = knex;
    this.tableName = tableName;
  }

  /**
   * removes all rows from table
   */
  async clear(): Promise<void> {
    await this.knex(this.tableName).del();
  }

  protected async dumpAllRows(): Promise<any[]> {
    return await this.knex(this.tableName).select();
  }

  /**
   * inserts a new DatabaseObject to the database and afterwards
   * updates object id and createdAt values
   *
   * @param databaseObject object to be inserted
   */
  protected async insert(databaseObject: DatabaseObject): Promise<void> {
    const errors = await this.validateObject(databaseObject, RepositoryValidationGroup.insert);
    if (errors.length > 0) {
      throw new DatabaseObjectValidationError(errors, "Invalid Data");
    }

    const objToInsert = this.getRawObjectProperties(databaseObject)[1];
    const queryResult = await this.knex(this.tableName).insert(objToInsert, ["id", "createdAt"]);

    databaseObject.id = queryResult[0].id;
    databaseObject.createdAt = queryResult[0].createdAt;
  }

  /**
   * returns an instance of a DatabaseObject
   * if a row with provided id exists in table
   *
   * @param objectId used to find row in table
   */
  protected async findOneById(objectId: string): Promise<DatabaseObject> {
    const queryResult = await this.knex(this.tableName).select().where("id", objectId);
    // logger.info(queryResult);
    if (queryResult[0]) {
      return queryResult[0] as DatabaseObject;
    } else {
      return undefined;
    }
  }

  /**
   * deletes row in table with given id
   *
   * @param objectId used to find row that will be deleted
   */
  protected async deleteOneById(objectId: string): Promise<number> {
    const numRowsDeleted: number =  await this.knex(this.tableName).del().where("id", objectId);
    return ( numRowsDeleted === -1 ) ? 0 : numRowsDeleted;
  }

  /**
   * updates specified values of DatabaseObject in database
   * for object with given id
   *
   * @param databaseObject object containing values and id of row to update
   */
  protected async update(databaseObject: DatabaseObject): Promise<void> {
    const errors = await this.validateObject(databaseObject, RepositoryValidationGroup.update) ;
    if (errors.length > 0) {
      throw new DatabaseObjectValidationError(errors, "Invalid Data");
    }

    const [id, objToUpdate] = this.getRawObjectProperties(databaseObject);
    const queryResult = await this.knex(this.tableName)
                                  .update(objToUpdate)
                                  .where("id", id)
                                  .returning(["createdAt", "updatedAt"]);

    if (queryResult[0]) {
      databaseObject.createdAt = queryResult[0].createdAt;
      databaseObject.updatedAt = queryResult[0].updatedAt;
    }
  }

  /**
   * check to see if object data is valid
   *
   * @param databaseObject object who's data is to be checked
   * @param group identifies which properties to validate
   */
   protected async validateObject(databaseObject: DatabaseObject, group?: RepositoryValidationGroup): Promise<ValidationError[]> {
    if (group) {
      return await validate(databaseObject, { groups: [group] });
    } else {
      return await validate(databaseObject);
    }
  }

  /**
   * getRawObjectProperties returns an id along with object with all properties
   * of provided object except those belonging to DatabaseObject
   *
   * @param databaseObject
   */
  protected getRawObjectProperties(databaseObject: DatabaseObject): [string, any] {
    const id = databaseObject.id;
    const insertObject: any = Object.assign({}, databaseObject);

     // delete insertObject.id;
     delete insertObject.createdAt;
     delete insertObject.updatedAt;

    return [id, insertObject];
  }

}

export class DatabaseObjectValidationError extends Error {
  validationErrors: ValidationError[];

  constructor(validationErrors: ValidationError[], message?: string) {
    super(message);
    this.validationErrors = validationErrors;
    Object.setPrototypeOf(this, DatabaseObjectValidationError.prototype);
  }
}
