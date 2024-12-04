import { FindAllResponse } from 'src/types/common.type'
import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm'

export interface BaseInterfaceRepository<T> {
  create(data: DeepPartial<T>): T
  createMany(data: DeepPartial<T>[]): T[]
  save(data: DeepPartial<T>): Promise<T>
  saveMany(data: DeepPartial<T>[]): Promise<T[]>
  findOneById(id: number): Promise<T>
  findByCondition(filterCondition: FindOneOptions<T>): Promise<T>
  findAll(options?: FindManyOptions<T>): Promise<FindAllResponse<T>>
  remove(data: T): Promise<T>
  findWithRelations(relations: FindManyOptions<T>): Promise<T[]>
  preload(entityLike: DeepPartial<T>): Promise<T>
  findOne(options: FindOneOptions<T>): Promise<T>
}
