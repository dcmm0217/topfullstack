// tslint:disable-next-line: eofline
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';

@Module({
  imports: [
    DbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
