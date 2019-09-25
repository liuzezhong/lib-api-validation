import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'MAX', async: false })
export class Max implements ValidatorConstraintInterface {
  validate(num: number, args: ValidationArguments): boolean {
    return validator.max(num, args.constraints[0]);
  }

  defaultMessage(args: ValidationArguments): string {
    return `A field ${args.property} exceeds. Max is (${args.constraints[0]}).`;
  }
}
