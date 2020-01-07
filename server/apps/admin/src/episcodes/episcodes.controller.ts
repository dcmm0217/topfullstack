import { Controller, Get } from '@nestjs/common';
import { Episode } from '@libs/db/models/episode.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';
import { Course } from '@libs/db/models/course.model';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model: Course,
})
@Controller('episcodes')
@ApiTags('课时')
export class EpiscodesController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Course) private readonly courseModel: ReturnModelType<typeof Course>,
    ) { }

    @Get('option')
    async option() {
        const courses = (await this.courseModel.find()).map(v => ({
            label: v.name,
            value: v._id,
        }));
        return {
            title: '课时管理',
            translate: false,
            column: [
                { prop: 'course', label: '所属课程', type: 'select', row: true, dicData: courses },
                { prop: 'name', label: '课时名称', span: 24 },
                { prop: 'file', label: '视频文件', listType: 'picture-img', span: 24, type: 'upload', action: '/upload', width: 120 },
            ],
        };
    }
}
