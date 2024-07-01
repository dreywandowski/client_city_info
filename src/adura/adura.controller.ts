import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AduraService } from './adura.service';
import { CreateAduraDto } from './dto/create-adura.dto';
import { UpdateAduraDto } from './dto/update-adura.dto';

@Controller('adura')
export class AduraController {
  constructor(private readonly aduraService: AduraService) {}

  @Post()
  create(@Body() createAduraDto: CreateAduraDto) {
    return this.aduraService.create(createAduraDto);
  }

  @Get()
  findAll() {
    return this.aduraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aduraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAduraDto: UpdateAduraDto) {
    return this.aduraService.update(+id, updateAduraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aduraService.remove(+id);
  }
}
