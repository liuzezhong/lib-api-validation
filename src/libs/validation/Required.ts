import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'REQUIRED', async: false })
export class Required implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return validator.isNotEmpty(obj);
  }

  defaultMessage(args: ValidationArguments): string {
    return `A field ${args.property} is required.`;
  }
}
