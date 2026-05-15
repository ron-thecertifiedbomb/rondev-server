import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";
import { ContactInquiryDto } from "./contact-inquiry.dto";

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: this.configService.get<string>("EMAIL"),
        pass: this.configService.get<string>("PASSWORD"),
      },
    });
  }

  async sendInquiryEmail(dto: ContactInquiryDto) {
    const { companyName, email, details } = dto;
    const recipientEmail = this.configService.get<string>("EMAIL");

    try {
      await this.transporter.sendMail({
        from: `"${companyName}" <${email}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `New Project Inquiry from ${companyName}`,
        text: `Company Name: ${companyName}\nEmail: ${email}\n\nProject Details:\n${details}`,
        html: `<h3>New Project Inquiry</h3><p><strong>Company:</strong> ${companyName}</p><p><strong>Email:</strong> ${email}</p><p><strong>Project Details:</strong><br/> ${details}</p>`,
      });

      return { message: "Inquiry sent successfully!" };
    } catch (error) {
      console.error("Error sending email:", error);
      throw new InternalServerErrorException(
        "Failed to send email. Please try again later.",
      );
    }
  }
}
