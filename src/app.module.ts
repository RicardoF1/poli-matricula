import { Module } from '@nestjs/common';
import { TeacherModule } from './teacher/teacher.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'mysql',
      //host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: false,
    }), 
    TeacherModule, UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
