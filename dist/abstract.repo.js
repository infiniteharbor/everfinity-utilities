"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const enums_1 = require("./enums");
class Repository {
    constructor(knex, tableName) {
        this.knex = knex;
        this.tableName = tableName;
    }
    /**
     * removes all rows from table
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.knex(this.tableName).del();
        });
    }
    dumpAllRows() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.knex(this.tableName).select();
        });
    }
    /**
     * inserts a new DatabaseObject to the database and afterwards
     * updates object id and createdAt values
     *
     * @param databaseObject object to be inserted
     */
    insert(databaseObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield this.validateObject(databaseObject, enums_1.RepositoryValidationGroup.insert);
            if (errors.length > 0) {
                throw new DatabaseObjectValidationError(errors, "Invalid Data");
            }
            const objToInsert = this.getRawObjectProperties(databaseObject)[1];
            const queryResult = yield this.knex(this.tableName).insert(objToInsert, ["id", "createdAt"]);
            databaseObject.id = queryResult[0].id;
            databaseObject.createdAt = queryResult[0].createdAt;
        });
    }
    /**
     * returns an instance of a DatabaseObject
     * if a row with provided id exists in table
     *
     * @param objectId used to find row in table
     */
    findOneById(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResult = yield this.knex(this.tableName).select().where("id", objectId);
            // logger.info(queryResult);
            if (queryResult[0]) {
                return queryResult[0];
            }
            else {
                return undefined;
            }
        });
    }
    /**
     * deletes row in table with given id
     *
     * @param objectId used to find row that will be deleted
     */
    deleteOneById(objectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const numRowsDeleted = yield this.knex(this.tableName).del().where("id", objectId);
            return (numRowsDeleted === -1) ? 0 : numRowsDeleted;
        });
    }
    /**
     * updates specified values of DatabaseObject in database
     * for object with given id
     *
     * @param databaseObject object containing values and id of row to update
     */
    update(databaseObject) {
        return __awaiter(this, void 0, void 0, function* () {
            const errors = yield this.validateObject(databaseObject, enums_1.RepositoryValidationGroup.update);
            if (errors.length > 0) {
                throw new DatabaseObjectValidationError(errors, "Invalid Data");
            }
            const [id, objToUpdate] = this.getRawObjectProperties(databaseObject);
            const queryResult = yield this.knex(this.tableName)
                .update(objToUpdate)
                .where("id", id)
                .returning(["createdAt", "updatedAt"]);
            if (queryResult[0]) {
                databaseObject.createdAt = queryResult[0].createdAt;
                databaseObject.updatedAt = queryResult[0].updatedAt;
            }
        });
    }
    /**
     * check to see if object data is valid
     *
     * @param databaseObject object who's data is to be checked
     * @param group identifies which properties to validate
     */
    validateObject(databaseObject, group) {
        return __awaiter(this, void 0, void 0, function* () {
            if (group) {
                return yield class_validator_1.validate(databaseObject, { groups: [group] });
            }
            else {
                return yield class_validator_1.validate(databaseObject);
            }
        });
    }
    /**
     * getRawObjectProperties returns an id along with object with all properties
     * of provided object except those belonging to DatabaseObject
     *
     * @param databaseObject
     */
    getRawObjectProperties(databaseObject) {
        const id = databaseObject.id;
        const insertObject = Object.assign({}, databaseObject);
        // delete insertObject.id;
        delete insertObject.createdAt;
        delete insertObject.updatedAt;
        return [id, insertObject];
    }
}
exports.Repository = Repository;
class DatabaseObjectValidationError extends Error {
    constructor(validationErrors, message) {
        super(message);
        this.validationErrors = validationErrors;
        Object.setPrototypeOf(this, DatabaseObjectValidationError.prototype);
    }
}
exports.DatabaseObjectValidationError = DatabaseObjectValidationError;
