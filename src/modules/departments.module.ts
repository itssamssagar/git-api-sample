import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { departmentsController } from '../controllers/departments.controller';
import { departmentsService } from '../services/departments.service';
import { departmentsRepo } from '../repository/departments.repo';
import { departments, departmentsSchema } from '../schemas/departments.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: departments.name, schema: departmentsSchema }])
    ],
    controllers: [departmentsController],
    providers: [departmentsService, departmentsRepo],
    exports: [departmentsService, departmentsRepo]
  })
  export class departmentsModule { }