import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { departments, departmentsDocument } from 'src/schemas/departments.schema';

@Injectable()
export class departmentsRepo {
    constructor(
        @InjectModel(departments.name)
        private readonly departmentsModel: Model<departmentsDocument>) {}

    async create(data): Promise<departments> {
        return new this.departmentsModel(data).save();
    }

    async findAll(): Promise<departments[]> {
        return this.departmentsModel.find({})
            .exec();
    }

    async update(departmentsId, data): Promise<departments> {
        const filter = { _id: departmentsId };
        return this.departmentsModel.findOneAndUpdate(filter, data);
    }

    async delete(departmentsId): Promise<departments> {
        const filter = { _id: departmentsId };
        return this.departmentsModel.findByIdAndDelete(departmentsId);
    }
}