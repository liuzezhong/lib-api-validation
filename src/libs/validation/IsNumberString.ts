import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';


@ValidatorConstraint({ name: 'IS_NUMBER_STRING', async: false })
export class IsNumberString implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    var regex = new RegExp(/[0-9]/);
    return regex.test(obj);
  }

  defaultMessage(args: ValidationArguments): string {
    return `${args.property} must be number.`;
  }
}