import { Module } from "@nestjs/common";
import { CloudinaryProvider } from "./cloudinary.provider";
import { CloudinaryService } from "./cloudinary.service";


@Module({
  providers: [CloudinaryProvider, CloudinaryService],
  exports: [CloudinaryProvider, CloudinaryService], // Exported so other modules can use the service
})
export class CloudinaryModule {}
