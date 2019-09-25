import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsArray implements ValidatorConstraintInterface {
    validate(obj: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
