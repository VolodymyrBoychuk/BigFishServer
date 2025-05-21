import { repl } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  await repl(AppModule);
}

bootstrap();
// This file is used to start a REPL (Read-Eval-Print Loop) for the NestJS application.
