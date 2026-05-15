
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemsService {
  constructor(@InjectModel(Item.name) private model: Model<ItemDocument>) {}

  create(dto: any) {
    return this.model.create(dto);
  }

  findAll() {
    return this.model.find();
  }

  async findOne(id: string) {
    const item = await this.model.findById(id);
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  async update(id: string, dto: any) {
    const item = await this.model.findByIdAndUpdate(id, dto, { new: true });
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  async remove(id: string) {
    const item = await this.model.findByIdAndDelete(id);
    if (!item) throw new NotFoundException('Item not found');
    return { deleted: true };
  }
}
