import { Controller } from '@nestjs/common';
import { Episode } from '@libs/db/models/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiUseTags } from '@nestjs/swagger';
import { Course } from '@libs/db/models/course.model';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model: Course,
})
@Controller('episcodes')
@ApiUseTags('课时')
export class EpiscodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
    ) { }
}
