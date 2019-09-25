import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsNumberString implements ValidatorConstraintInterface {
    validate(obj: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
