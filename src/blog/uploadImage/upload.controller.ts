import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  FileTypeValidator,
  BadRequestException,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { CloudinaryService } from "./cloudinary.service";


@Controller("api/upload")
export class UploadController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post("image")
  @UseInterceptors(FileInterceptor("file"))
  async uploadImage(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 5 * 1024 * 1024 }), // Enforce a 5MB max file size
          new FileTypeValidator({ fileType: ".(png|jpeg|jpg|webp|gif)" }), // Ensure only web-safe images are uploaded
        ],
        fileIsRequired: true,
      }),
    )
    file: Express.Multer.File,
  ) {
    try {
      const result = await this.cloudinaryService.uploadImage(file);
      return {
        url: result.secure_url,
      };
    } catch (error) {
      throw new BadRequestException(
        error.message || "Failed to upload image to Cloudinary",
      );
    }
  }
}
