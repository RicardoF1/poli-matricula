import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)            //indica a Nest.js que debe inyectar un repositorio de TypeORM asociado con la entidad, en este caso User   
  private readonly userRepository: Repository<User>){}   // Especifica el tipo de la propiedad. En este caso User


  //constructor lo entiendo como que ayuda para reducir el codigo y no tener que mencionar o llamar a la entidad en este caso
  //para cuando se crea una funcion podamos llamarlo 
  create(createUserDto: CreateUserDto) {
    return this.userRepository;
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
