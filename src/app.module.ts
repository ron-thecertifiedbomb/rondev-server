import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ItemsModule } from "@/items/items.module";
import { PostsModule } from "@/blog/post/posts.module";
import { UploadModule } from "./blog/uploadImage/upload.module";


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env.local",
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGO_URI"),
        dbName: "blogs",
      }),
      inject: [ConfigService],
    }),
    ItemsModule,
    PostsModule,
    UploadModule,
  ],
})
export class AppModule {}
