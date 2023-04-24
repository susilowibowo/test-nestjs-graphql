import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  async create(book: Book): Promise<Book> {
    return await this.bookRepository.save(book);
  }

  async findAll(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findbyId(id: number): Promise<Book> {
    return await this.bookRepository.findOne({where: {id}});
  }

  // make service for search book by title, author, or isbn
  async search(keyword: string): Promise<Book[]> {
    if (keyword.length < 3) {
      throw new BadRequestException('Keyword must be at least 3 characters');
    }
    const books = await this.bookRepository.find({
        where : [
            {title: ILike(`%${keyword}%`)},
            {author: ILike(`%${keyword}%`)},
            {isbn: ILike(`%${keyword}%`)},
        ]
    });
    return books;
  }

  async update(id: number, updateBookInput: UpdateBookInput): Promise<Book> {
    const book = await this.bookRepository.findOne({where: {id}});
    if (book) {
      const { title, author, description, isbn, published} = updateBookInput;
      book.title = title;
      book.author = author;
      book.description = description;
      book.isbn = isbn;
      book.published = published
      return await this.bookRepository.save(book);
    }
    return null;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
