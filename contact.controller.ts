import { Body, Controller, Post } from "@nestjs/common";
import { EmailService } from "./email.service";
import { ContactInquiryDto } from "./contact-inquiry.dto";

@Controller("api/contact")
export class ContactController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  async sendEmail(@Body() contactInquiryDto: ContactInquiryDto) {
    return this.emailService.sendInquiryEmail(contactInquiryDto);
  }
}
