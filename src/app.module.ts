import { Module } from '@nestjs/common';
import { CartoonModule } from './cartoon/cartoon.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    AuthModule,
    CartoonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
