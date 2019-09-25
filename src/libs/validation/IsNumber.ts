import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'IS_NUMBER', async: false })
export class IsNumber implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return validator.isNumber(obj);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be number.`;
  }
}
