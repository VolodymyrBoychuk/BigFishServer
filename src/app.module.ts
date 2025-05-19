import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FishingSpotsModule } from './fishing-spots/fishing-spots.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IamModule } from './iam/iam.module';
import { ConfigModule } from '@nestjs/config';
//import jwtConfig from './iam/config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      // isGlobal: true, // зробити доступним по всьому проєкту
      // load: [jwtConfig], // підвантажити вашу jwt-конфігурацію
      // envFilePath: '.env', // якщо потрібно
    }),
    FishingSpotsModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST ?? 'localhost',
      port: +(process.env.DATABASE_PORT ?? 5432),
      username: process.env.DATABASE_USER ?? 'postgres',
      password: process.env.DATABASE_PASSWORD ?? 'pass123',
      database: process.env.DATABASE_NAME ?? 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    }),
    IamModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
