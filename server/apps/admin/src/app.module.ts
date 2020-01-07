import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { EpiscodesModule } from './episcodes/episcodes.module';
import { MulterModule } from '@nestjs/platform-express';

import MAO = require('multer-aliyun-oss');
import { CommonModule } from '@app/common';

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET ,
              bucket: process.env.OSS_BUCKET,
            },
          }),
        };
      },
    }),
    /*    MulterModule.register({
         // dest: 'uploads',
         storage: MAO({
           config: {
             region: 'oss-cn-shenzhen',
             accessKeyId: 'LTAI4FxrAzfMBwFA1nwcRogV',
             accessKeySecret: 'RYK3STSl3dUQRni6xSVJ2okUd1L1po',
             bucket: 'tofullres',
           },
         }),
       }), */
    UsersModule,
    CoursesModule,
    EpiscodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
