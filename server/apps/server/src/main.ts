import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
    .setTitle('绯色天空-前端管理API')
    .setDescription('供网站和APP管理界面调用的服务端API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  const PORT = process.env.SERVER_PORT || 3001;
  await app.listen(PORT);
  // tslint:disable-next-line: no-console
  console.log(`http://localhost:${PORT}/api-docs`);
}
bootstrap();
