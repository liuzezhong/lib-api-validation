import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

@ValidatorConstraint({ name: 'IS_OBJECT', async: false })
export class IsObject implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    return typeof obj === 'object';
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be object.`;
  }
}
