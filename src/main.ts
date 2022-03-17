import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";
import { join } from "path";


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.useStaticAssets(join(__dirname, '..','static'));
  app.setBaseViewsDir(join(__dirname, '..','src/views'));
  app.setViewEngine('hbs');
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
