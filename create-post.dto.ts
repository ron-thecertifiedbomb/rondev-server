import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
  @IsString()
  @IsNotEmpty({ message: "Title is required" })
  title: string;

  @IsString()
  @IsNotEmpty({ message: "Content is required" })
  content: string;

  @IsString()
  @IsNotEmpty({ message: "Author is required" })
  author: string;

  @IsArray()
  @IsOptional()
  tags?: string[];
}
