import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'IS_NOT_EMPTY', async: false })
export class IsNotEmpty implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return validator.arrayMinSize(obj, 0);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must not be empty.`;
  }
}
