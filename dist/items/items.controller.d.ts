import { ItemsService } from './items.service';
export declare class ItemsController {
    private readonly service;
    constructor(service: ItemsService);
    create(body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/item.schema").ItemDocument> & import("./schemas/item.schema").Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/item.schema").ItemDocument> & import("./schemas/item.schema").Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/item.schema").ItemDocument> & import("./schemas/item.schema").Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./schemas/item.schema").ItemDocument, "find">;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/item.schema").ItemDocument> & import("./schemas/item.schema").Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, body: any): Promise<import("mongoose").Document<unknown, {}, import("./schemas/item.schema").ItemDocument> & import("./schemas/item.schema").Item & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
