import { DbService } from './db.service';
export declare class DbController {
    private readonly dbService;
    constructor(dbService: DbService);
    create(body: {
        queryValue: any;
    }): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        price: string;
        description: string;
        sku: string;
        marque: string;
        type: string;
        images: string;
        featured_image: string;
        weight: string;
    }[]>;
    collection(body: {
        queryValue: any;
    }): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        title: string;
        price: string;
        description: string;
        sku: string;
        marque: string;
        type: string;
        images: string;
        featured_image: string;
        weight: string;
    }[]>;
}
