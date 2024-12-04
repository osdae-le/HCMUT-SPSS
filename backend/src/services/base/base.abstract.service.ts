import { BaseInterfaceRepository } from 'src/repositories/base/base.interface.repository'
import { FindAllResponse } from 'src/types/common.type'
import { BaseServiceInterface } from './base.interface.service'
import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm'

interface HasId {
  id: number
}

export abstract class BaseServiceAbstract<T extends HasId>
  implements BaseServiceInterface<T>
{
  constructor(private readonly repository: BaseInterfaceRepository<T>) {}

  async create(create_dto: T | any): Promise<T> {
    return await this.repository.save(create_dto)
  }

  async findAll(options?: FindManyOptions<T>): Promise<FindAllResponse<T>> {
    return await this.repository.findAll(options)
  }
  async findOne(id: number) {
    return await this.repository.findOneById(id)
  }

  async findOneByCondition(filter: FindOneOptions<T>) {
    return await this.repository.findByCondition(filter)
  }

  async update(update_dto: DeepPartial<T>): Promise<T> {
    return await this.repository.save(update_dto)
  }

  async remove(data: T): Promise<T> {
    return await this.repository.remove(data)
  }
}
