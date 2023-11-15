import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { teacher} from 'entities/teacher.entity.ts';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(teacher)
    private teacherRepository: Repository<teacher>,
  ){}
  create(createTeacherDto: CreateTeacherDto) {
    return 'This action adds a new teacher';
  }
  async tea(id: string){
    const resu = await this.teacherRepository.query(`CALL uspNoEspecialidad(?)`,[id])
    return resu[0];
  }

  findAll() {
    return `This action returns all teacher`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacher`;
  }

  update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return `This action updates a #${id} teacher`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacher`;
  }
}
