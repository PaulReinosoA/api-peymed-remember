import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
  console.log(`api corriendo en el puerto ${process.env.PORT ?? 3000}`);
  console.log(process.env.SERVICE_NAME);
}
bootstrap();
