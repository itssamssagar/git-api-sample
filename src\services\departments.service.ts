import { Injectable } from '@nestjs/common';
import { departmentsRepo } from '../repository/departments.repo';
import { departments } from '../schemas/departments.schema';

@Injectable()
export class departmentsService {
    constructor(
        private readonly departmentsRepo: departmentsRepo
    ) { }

    async findAll(): Promise<departments[]> {
        return this.departmentsRepo.findAll();
    }

    async create(data): Promise<departments> {
        data.createddate = new Date();
        return this.departmentsRepo.create(data);
    }

    async update(departmentsId, data): Promise<departments> {
        return this.departmentsRepo.update(departmentsId, data);
    }

    async delete(departmentsId): Promise<departments> {
        return this.departmentsRepo.delete(departmentsId);
    }
}