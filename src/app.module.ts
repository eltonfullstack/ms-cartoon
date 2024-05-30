import { Module } from '@nestjs/common';
import { CartoonModule } from './cartoon/cartoon.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,}),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    CartoonModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
