import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type departmentsDocument = departments & Document;

@Schema()
export class departments {
   
   @Prop()
   department_id: string; 
   
   @Prop()
   department_name: string; 
   
   @Prop()
   competencies_available: string; 
   
}

export const departmentsSchema = SchemaFactory.createForClass(departments);