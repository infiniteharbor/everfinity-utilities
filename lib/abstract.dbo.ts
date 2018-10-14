import { IsDefined } from "class-validator";
import { RepositoryValidationGroup } from "./enums";

const valid: any = {
  groups: [
    RepositoryValidationGroup.insert,
    RepositoryValidationGroup.update
  ]
};

export abstract class DatabaseObject {

  @IsDefined(valid)
  id: any;

  createdAt?: Date;

  updatedAt?: Date;
}
