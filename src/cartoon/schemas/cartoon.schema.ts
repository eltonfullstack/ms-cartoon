import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CartoonDocument = Cartoon & Document;

@Schema({ timestamps: true })
export class Cartoon {

    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    image: string;

}

export const CartoonSchema = SchemaFactory.createForClass(Cartoon);