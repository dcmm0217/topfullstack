// tslint:disable-next-line: eofline
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpiscodesModule } from './episcodes/episcodes.module';

@Module({
  imports: [
    DbModule,
    UsersModule,
    CoursesModule,
    EpiscodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
