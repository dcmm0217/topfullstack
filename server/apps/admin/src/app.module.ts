import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpiscodesModule } from './episcodes/episcodes.module';
import { MulterModule } from '@nestjs/platform-express';

import MAO = require('multer-aliyun-oss');

@Module({
  imports: [
    MulterModule.register({
      // dest: 'uploads',
      storage: MAO({
        config: {
          region: 'oss-cn-shenzhen',
          accessKeyId: '',
          accessKeySecret: '',
          bucket: 'tofullres',
        },
      }),
    }),
    DbModule,
    UsersModule,
    CoursesModule,
    EpiscodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
