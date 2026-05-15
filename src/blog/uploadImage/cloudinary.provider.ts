import { Provider } from "@nestjs/common";
import { v2 as cloudinary } from "cloudinary";

export const CloudinaryProvider: Provider = {
  provide: "CLOUDINARY",
  useFactory: () => {
    // Cloudinary automatically picks up the CLOUDINARY_URL environment variable
    return cloudinary.config();
  },
};
