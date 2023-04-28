import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { PartnerType } from "src/partners/entities/partner-type.entity";
import { Repository } from "typeorm";


@ValidatorConstraint({ name: 'PartnerTypeExists', async: true })
@Injectable()
export class partnerTypeExist implements ValidatorConstraintInterface {
    constructor(
        @InjectRepository(PartnerType)
        private partnerTypeRepository: Repository<PartnerType>,
      ) {}

    async validate(value: number): Promise<boolean> {
    try {
        await this.partnerTypeRepository.findOneOrFail({ where: { id: value } });
    } catch (e) {
        return false;
    }
        return true;
    }

    defaultMessage(args: ValidationArguments) {
        return `Partner Type doesn't exist`;
    }
}