import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class IsString implements ValidatorConstraintInterface {
    validate(obj: any, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
