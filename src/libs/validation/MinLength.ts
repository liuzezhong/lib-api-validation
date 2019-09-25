import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'MIN_LENGTH_SHORT', async: false })
export class MinLength implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments): boolean {
    return validator.minLength(text, args.constraints[0]);
  }

  defaultMessage(args: ValidationArguments): string {
    return `A field '${args.property}' is too short. Min length is (${args.constraints[0]}).`;
  }
}
