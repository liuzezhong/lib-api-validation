import { ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
export declare class Max implements ValidatorConstraintInterface {
    validate(num: number, args: ValidationArguments): boolean;
    defaultMessage(args: ValidationArguments): string;
}
