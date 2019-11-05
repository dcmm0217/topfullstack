import { Test, TestingModule } from '@nestjs/testing';
import { EpiscodesController } from './episcodes.controller';

describe('Episcodes Controller', () => {
  let controller: EpiscodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EpiscodesController],
    }).compile();

    controller = module.get<EpiscodesController>(EpiscodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
