import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { BookModule } from './book/book.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AuthorModule } from './author/author.module';
import { RolesModule } from './roles/roles.module';
import { PartnersModule } from './partners/partners.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
    }),
    BookModule,
    AuthModule,
    UsersModule,
    AuthorModule,
    RolesModule,
    PartnersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
