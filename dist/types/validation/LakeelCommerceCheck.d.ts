import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class LakeelCommerceCheck implements ValidatorConstraintInterface {
    validate(validObj: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
