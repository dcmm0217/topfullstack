import { Module } from '@nestjs/common';
import { EpiscodesController } from './episcodes.controller';

@Module({
  controllers: [EpiscodesController]
})
export class EpiscodesModule {}
