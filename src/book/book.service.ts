import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';

import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Author } from 'src/author/entities/author.entity';
// import { AuthorService } from 'src/author/author.service';
// import { CreateBookAuthorInput } from './dto/create-book-author.input';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(Author)
    private authorRepository: Repository<Author>,
    // private authorService: AuthorService,
  ) {}

  async create(book: Book): Promise<Book> {
    return await this.bookRepository.save(book);
  }

//   async createBookWithAuthor(input: CreateBookAuthorInput): Promise<Book> {
//     let author = await this.authorRepository.findOne({ where: { name: input.authorName } });

//     if (!author) {
//         author = new Author();
//         author.name = input.authorName;
//         author.age = input.authorAge;
//         await this.authorRepository.save(author);
//     }

//     const book = new Book();
//     book.title = input.title;
//     book.description = input.description;
//     book.isbn = input.isbn;
//     book.published = input.published;
//     book.author = author;
//     await this.bookRepository.save(book);

//     return book;
// }

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
      const { title, author_id, description, isbn, published} = updateBookInput;
      book.title = title;
      book.author_id = author_id;
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

  async getAuthor(author_id: number): Promise<Author> {
    const author = await this.authorRepository.findOne({where: {id: author_id}});
    if (!author) {
      throw new Error('Author with ID ${authorId} not found');
    }
    return author;
  }
}
