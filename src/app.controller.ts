import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getHello() {
    return {
      message: "Welcome to the Rondev API! The server is up and running.",
    };
  }
}
