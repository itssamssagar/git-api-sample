import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { departmentsDto } from '../dto/departments-dto.dto';
import { departmentsService } from '../services/departments.service';


@Controller('departments')
export class departmentsController {
    constructor(private readonly departmentsService: departmentsService) { }

    @Post()
    async create(@Body() departmentsDto: departmentsDto) {
        const res = this.departmentsService.create(departmentsDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.departmentsService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() departmentsDto: departmentsDto) {
        return this.departmentsService.update(id, departmentsDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.departmentsService.delete(id);
    }
}