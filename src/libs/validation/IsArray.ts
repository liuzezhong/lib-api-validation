import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'IS_ARRAY', async: false })
export class IsArray implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return validator.isArray(obj);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be array.`;
  }
}
