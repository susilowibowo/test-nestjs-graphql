import {
    ValidationArguments,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  import { Injectable } from '@nestjs/common';
  import { Connection } from 'typeorm';
  
  @ValidatorConstraint({ name: 'MarketingExists', async: true })
  @Injectable()
  export class MarketingExistsConstraint implements ValidatorConstraintInterface {
    constructor(private connection: Connection) {}
  
    async validate(value: string, args: ValidationArguments) {
      if (!value) {
        return true;
      }
      const queryRunner = this.connection.createQueryRunner();
      try {
        await queryRunner.connect();
        const marketing = await queryRunner.manager.query(
          `SELECT id FROM marketing WHERE code = '${value}'`,
        );
        return marketing.length > 0;
      } catch (error) {
        console.log(error);
        return false;
      } finally {
        await queryRunner.release();
      }
    }
  
    defaultMessage(args: ValidationArguments) {
      return `${args.property} does not exist in marketing table`;
    }
  }
  