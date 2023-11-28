import { PrismaService } from 'src/prisma/prisma.service';
export declare class DbService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    search(query: any): import(".prisma/client").Prisma.PrismaPromise<{
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
    collection(query: any): import(".prisma/client").Prisma.PrismaPromise<{
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
