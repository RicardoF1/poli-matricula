import { IsEmail, IsString, Length, Matches } from "class-validator";
export class CreateUserDto {
    @IsString()
    @IsEmail({}, {message: 'Tipo correo'})
    @Length(1,99)
    correo:string

    @IsString({message: 'Contraseña'})
    @Length(1,30)
    @Matches(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\W_]).+$/, {
        message:
          'La contraseña debe contener al menos un número, una letra y un carácter especial',
      })
      contrasena: string;
}
