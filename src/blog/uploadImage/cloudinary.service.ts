import { Injectable, BadRequestException } from "@nestjs/common";
import {
  v2 as cloudinary,
  UploadApiResponse,
  UploadApiErrorResponse,
} from "cloudinary";
import { Readable } from "stream";

@Injectable()
export class CloudinaryService {
  uploadImage(
    file: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      if (!file || !file.buffer) {
        return reject(new BadRequestException("Invalid file provided"));
      }

      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "blog_cms", // Group all uploads into a specific Cloudinary folder
        },
        (error, result) => {
          if (error) return reject(error);
          if (result) return resolve(result);
          reject(new BadRequestException("Upload failed"));
        },
      );

      // Convert buffer to readable stream using Node's native stream module
      const stream = new Readable();
      stream.push(file.buffer);
      stream.push(null);
      stream.pipe(uploadStream);
    });
  }
}
