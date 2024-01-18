import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DbService } from './db.service';


@Controller('db')
export class DbController {
  constructor(private readonly dbService: DbService) {}

  @Post('/search')
  create(@Body() body: {queryValue}) {
    const query = body.queryValue
    return this.dbService.search(query)
    
  }

  @Post('/collection')
  collection(@Body() body: {queryValue}) {
    const query = body.queryValue
    return this.dbService.collection(query)
  }
}
