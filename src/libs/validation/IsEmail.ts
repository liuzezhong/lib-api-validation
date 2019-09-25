import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'IS_EMAIL', async: false })
export class IsEmail implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return validator.isEmail(obj);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be in the form of a e-mail address.`;
  }
}
