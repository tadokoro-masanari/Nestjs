import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from "cookie-parser";
import * as csurf from "csurf"
import {Request} from "express"

function readCsrfToken(req) {
  return req.csrfToken();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

app.enableCors({
  credentials: true,
  origin: ["http://localhost:3000"]
});
app.use(cookieParser());

app.use(
  csurf({
    cookie: {
      httpOnly:true,
      sameSite: "none",
      secure: false,
    },
    value: (req: Request) => {
      return req.header("csrf-token");
    },
  }),
)
  const config = new DocumentBuilder()
  .setTitle('Median')
  .setDescription('The Median API description')
  .setVersion('0.1')
  .build();


  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
