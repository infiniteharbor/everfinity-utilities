import * as Knex from "knex";
import { ValidationError } from "class-validator";
import { DatabaseObject } from "./abstract.dbo";
import { RepositoryValidationGroup } from "./enums";
export declare abstract class Repository {
    readonly knex: Knex;
    readonly tableName: string;
    constructor(knex: Knex, tableName: string);
    /**
     * removes all rows from table
     */
    clear(): Promise<void>;
    protected dumpAllRows(): Promise<any[]>;
    /**
     * inserts a new DatabaseObject to the database and afterwards
     * updates object id and createdAt values
     *
     * @param databaseObject object to be inserted
     */
    protected insert(databaseObject: DatabaseObject): Promise<void>;
    /**
     * returns an instance of a DatabaseObject
     * if a row with provided id exists in table
     *
     * @param objectId used to find row in table
     */
    protected findOneById(objectId: string): Promise<DatabaseObject>;
    /**
     * deletes row in table with given id
     *
     * @param objectId used to find row that will be deleted
     */
    protected deleteOneById(objectId: string): Promise<number>;
    /**
     * updates specified values of DatabaseObject in database
     * for object with given id
     *
     * @param databaseObject object containing values and id of row to update
     */
    protected update(databaseObject: DatabaseObject): Promise<void>;
    /**
     * check to see if object data is valid
     *
     * @param databaseObject object who's data is to be checked
     * @param group identifies which properties to validate
     */
    protected validateObject(databaseObject: DatabaseObject, group?: RepositoryValidationGroup): Promise<ValidationError[]>;
    /**
     * getRawObjectProperties returns an id along with object with all properties
     * of provided object except those belonging to DatabaseObject
     *
     * @param databaseObject
     */
    protected getRawObjectProperties(databaseObject: DatabaseObject): [string, any];
}
export declare class DatabaseObjectValidationError extends Error {
    validationErrors: ValidationError[];
    constructor(validationErrors: ValidationError[], message?: string);
}
