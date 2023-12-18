import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { UserModule } from '../user/user.module';
import { ResponseInterceptor } from '../middlewares/response.interceptor';
import dbConfig from '../../typeorm.config';
import * as dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
dotenv.config({ path: `${environment}.env` });

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), UserModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
