import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DbService {
  constructor(private readonly prisma: PrismaService) { }
  search(query) {
    const result = this.prisma.product.findMany({
      take:100,
      where: {
        title: {
          contains: query
        }
      }
    })
    return result;
  }

  collection(query) {
    const result = this.prisma.product.findMany({
      where:{
        type: {
          contains: query
        }
      }
    })
    return result
  }
}
