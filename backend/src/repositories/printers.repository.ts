import { Printer } from "src/models/printers.entity";
import { BaseAbstractRepostitory } from "./base/base.abstract.repository";
import { PrintersRepositoryInterface } from "src/modules/printers/interfaces/printers.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class PrintersRepository extends BaseAbstractRepostitory<Printer> implements PrintersRepositoryInterface {
    constructor(
        @InjectRepository(Printer) private readonly printerRepository: Repository<Printer>,
      ) {
        super(printerRepository)
      }
}