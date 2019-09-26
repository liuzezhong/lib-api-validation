import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments
} from 'class-validator';

@ValidatorConstraint({ name: 'LAKEEL_COMMERCE_CHECK', async: false })
export class LakeelCommerceCheck implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    console.log('obj21', obj);
    return false;
  }

  defaultMessage(args: ValidationArguments): string {
    console.log('argsargs', args);
    return `${args.property} must be string.`;
  }
}
