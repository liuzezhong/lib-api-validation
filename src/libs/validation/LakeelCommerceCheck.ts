import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
  Validator
} from 'class-validator';
// import IsString from './IsString';

// const checkResult: any = {
//   validMessage: 'all check right!',
//   validResult: true
// };

@ValidatorConstraint({ name: 'LAKEEL_COMMERCE_CHECK', async: false })
export class LakeelCommerceCheck implements ValidatorConstraintInterface {
  validate(obj: any, args: ValidationArguments): boolean {
    let res: any = false;
    const validator: any = new Validator();
    if (obj === 'VC000001') {
      console.log('objobjobj', obj);
      res = validator.isString(obj);
    }
    return res;
  }

  defaultMessage(args: ValidationArguments): string {
    console.log('argsargs', args);
    return `${args.property} must be string.`;
  }
}
