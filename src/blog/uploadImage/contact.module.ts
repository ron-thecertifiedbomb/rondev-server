import { ContactController } from "@/contact/contact.controller";
import { EmailService } from "@/contact/email.service";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";



@Module({
  imports: [ConfigModule],
  controllers: [ContactController],
  providers: [EmailService],
})
export class ContactModule {}
