import { FindAllResponse } from 'src/types/common.type'
import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm'

export interface Write<T> {
  create(item: T | any): Promise<T>
  update(update_dto: DeepPartial<T>): Promise<T>
  remove(data: T): Promise<T>
}

export interface Read<T> {
  findAll(options?: FindManyOptions<T>): Promise<FindAllResponse<T>>
  findOne(id: number): Promise<T>
  findOneByCondition(filter: FindOneOptions<T>): Promise<T>
}

export interface BaseServiceInterface<T> extends Write<T>, Read<T> {}
