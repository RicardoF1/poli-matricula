import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Prefijo de utilizacion de apis
  app.setGlobalPrefix("api/v1");
  //Validacion Global
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );
  //Configuracion de swagger
  const config = new DocumentBuilder()
  .setTitle('Poli Matricula APIS')
  .setDescription('Apis para realizar matricula de un cole.')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  //Puerto del servidor
  await app.listen(process.env.PORT_SERVER);
  
}
bootstrap();
