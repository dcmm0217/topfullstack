import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
// import { EpisodesModule } from './episodes/episodes.module';
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
