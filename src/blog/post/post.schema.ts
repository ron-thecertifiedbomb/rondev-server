import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PostDocument = Post & Document;

@Schema({ timestamps: true, collection: "post" }) // Automatically adds createdAt and updatedAt, and forces collection name to 'post'
export class Post {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  author: string;

  @Prop([String])
  tags: string[];

  @Prop()
  coverImage?: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
