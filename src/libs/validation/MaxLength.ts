import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'MAX_LENGTH_EXCEEDED', async: false })
export class MaxLength implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments): boolean {
    return validator.maxLength(text, args.constraints[0]);
  }

  defaultMessage(args: ValidationArguments): string {
    return `A field ${args.property} exceeds. Max length is (${args.constraints[0]}).`;
  }
}
