import {
  Validator,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

const validator: Validator = new Validator();

@ValidatorConstraint({ name: 'HALF_WITDH_CHARACTER_ONLY', async: false })
export class HalfWidth implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments): boolean {
    return validator.isHalfWidth(text);
  }

  defaultMessage(args: ValidationArguments): string {
    return `A field ${args.property} must contain only half-width character(s).`;
  }
}
