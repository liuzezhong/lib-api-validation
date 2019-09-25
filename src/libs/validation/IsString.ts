import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'IS_STRING', async: false })
export class IsString implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return validator.isString(obj);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be string.`;
  }
}
