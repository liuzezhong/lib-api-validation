import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'IS_BOOLEAN', async: false })
export class IsBoolean implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return validator.isBoolean(obj);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be boolean.`;
  }
}
