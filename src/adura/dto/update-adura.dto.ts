import { PartialType } from '@nestjs/mapped-types';
import { CreateAduraDto } from './create-adura.dto';

export class UpdateAduraDto extends PartialType(CreateAduraDto) {}
