import {IsEmail, IsEnum, IsISO8601, IsNotEmpty, IsString, MinLength} from 'class-validator'


export class updateUserDto{
    @IsString()
    @MinLength(3)
    title: string

    @IsString()
    @MinLength(3)
    description: string

    @IsString()
    @MinLength(3)
    price: string

    @IsString()
    @MinLength(3)
    priceDiscounted: string

}