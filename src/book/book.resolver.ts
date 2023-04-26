import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BookService } from './book.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
// import { CreateBookAuthorInput } from './dto/create-book-author.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private readonly bookService: BookService
    ) {}

  @Mutation(() => Book)
  async createBook(@Args('input') input: CreateBookInput): Promise<Book> {
    const { title, author_id ,description, isbn, published } = input;
    const book = new Book();
    book.title = title;
    book.author_id = author_id;
    book.description = description;
    book.isbn = isbn;
    book.published  = published;
    return await this.bookService.create(book);
  }

  // @Mutation(() => Book)
  // async createBookWithAuthor(@Args('input') createBookAuthorInput: CreateBookAuthorInput): Promise<Book> {
  //   return await this.bookService.createBookWithAuthor(createBookAuthorInput);
  // }

  @Query(() => [Book])
  async books(): Promise<Book[]> {
    return await this.bookService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  async findbyId(@Args('id', { type: () => Int }) id: number): Promise<Book> {
    return await this.bookService.findbyId(id);
  }

  // controller for search book by title
  @Query(() => [Book], { name: 'searchBook' })
  async searchBooks(@Args('query') query: string): Promise<Book[]> {
    return await this.bookService.search(query);
  }

  @Mutation(() => Book)
  async updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput): Promise<Book> {
    return this.bookService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id', { type: () => Int }) id: number) {
    return this.bookService.remove(id);
  }
}
