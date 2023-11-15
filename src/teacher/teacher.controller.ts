import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { get } from 'http';

@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  
  @Get('teacher/:id')
  mostrar(@Param('id') id:string){
    return this.teacherService.tea(id)
  }
  @Post()
  create(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }

  @Get()
  findAll() {
    return this.teacherService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(+id, updateTeacherDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(+id);
  }
  @Get()
  create2(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }
  @Post()
  create3(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }
  @Post()
  create4(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }
  @Get()
  create0(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }
  @Get()
  crdeate0(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }
  @Get()
  csreate0(@Body() createTeacherDto: CreateTeacherDto) {
    return this.teacherService.create(createTeacherDto);
  }
  
}