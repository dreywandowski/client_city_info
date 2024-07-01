import { Injectable } from '@nestjs/common';
import { CreateAduraDto } from './dto/create-adura.dto';
import { UpdateAduraDto } from './dto/update-adura.dto';

@Injectable()
export class AduraService {
  create(createAduraDto: CreateAduraDto) {
    return 'This action adds a new adura';
  }

  findAll() {
    return `This action returns all adura`;
  }

  findOne(id: number) {
    return `This action returns a #${id} adura`;
  }

  update(id: number, updateAduraDto: UpdateAduraDto) {
    return `This action updates a #${id} adura`;
  }

  remove(id: number) {
    return `This action removes a #${id} adura`;
  }
}
