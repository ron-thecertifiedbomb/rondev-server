
import { Controller, Get, Post, Body, Param, Put, Delete, UseInterceptors, UploadedFiles, BadRequestException } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { ItemsService } from './items.service';
// import { UploadService } from '../upload/upload.service';

@Controller('items')
export class ItemsController {
  constructor(
    private readonly service: ItemsService,
    // private readonly uploadService: UploadService
  ) {}

  @Post()
  @UseInterceptors(AnyFilesInterceptor())
  async create(
    @Body('blocks') blocksString: string,
    @UploadedFiles() files: Array<Express.Multer.File>
  ) {
    if (!blocksString) {
      throw new BadRequestException('Content blocks are required');
    }

    const blocks = JSON.parse(blocksString);

    // We use Promise.all here because mapping over an array with async functions returns an array of Promises
    const processedBlocks = await Promise.all(
      blocks.map(async (block, index) => {
        if (block.type === 'image') {
          const file = files.find(f => f.fieldname === `file_${index}`);
          if (file) {
            // const fileUrl = await this.uploadService.uploadImage(file);
            return { ...block, fileUrl: 'https://placeholder-url.com/image.jpg' }; // replace with actual fileUrl
          }
        }
        return block;
      })
    );

    // Saves the item to your MongoDB database via ItemsService
    return this.service.create({ blocks: processedBlocks });
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.service.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
