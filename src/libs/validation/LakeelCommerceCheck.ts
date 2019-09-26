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

enum validTypeEnum {
  FETCH_API = 'fetch_api',
  IS_STRING = 'is_string'
}

const res: any = {
  errorCode: '',
  validMessage: 'check passed',
  validResult: true
};

@ValidatorConstraint({ name: 'LAKEEL_COMMERCE_CHECK', async: false })
export class LakeelCommerceCheck implements ValidatorConstraintInterface {
  validate(validObj: any, args: ValidationArguments): boolean {
    console.log('validObj', validObj);
    if (validObj.type !== validTypeEnum.FETCH_API && !validObj.value) {
      res.errorCode = 'P0001';
      res.validResult = false;
      res.validMessage = 'params err';
    }
    const validator: any = new Validator();
    switch (validObj.type) {
      case validTypeEnum.FETCH_API:
        break;
      case validTypeEnum.IS_STRING:
        if (!validator.isString(validObj.value)) {
          res.validMessage = 'not string';
          res.validResult = false;
          res.errorCode = 'E0001';
        }
        break;
    }
    return res;
  }

  defaultMessage(args: ValidationArguments): string {
    console.log('argsargs', args);
    return `${args.property} must be string.`;
  }
}
