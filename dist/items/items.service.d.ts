import { Model } from 'mongoose';
import { Item, ItemDocument } from './schemas/item.schema';
export declare class ItemsService {
    private model;
    constructor(model: Model<ItemDocument>);
    create(dto: any): Promise<import("mongoose").Document<unknown, {}, ItemDocument> & Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, ItemDocument> & Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, ItemDocument> & Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, ItemDocument, "find">;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, ItemDocument> & Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, dto: any): Promise<import("mongoose").Document<unknown, {}, ItemDocument> & Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
