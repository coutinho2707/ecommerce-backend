import { DeleteResult, Repository } from 'typeorm';
import { Brand } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private repository: Repository<Brand>,
  ) {}

  findAll(): Promise<Brand[]> {
    return this.repository.find();
  }

  findById(id: string): Promise<Brand | null> {
    return this.repository.findOneBy({ id });
  }

  save(brand: Brand): Promise<Brand> {
    return this.repository.save(brand);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
}
