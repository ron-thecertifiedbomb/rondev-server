import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class ContactInquiryDto {
  @IsString()
  @IsNotEmpty({ message: "Company name is required" })
  companyName: string;

  @IsEmail({}, { message: "A valid email is required" })
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty({ message: "Project details are required" })
  details: string;
}
