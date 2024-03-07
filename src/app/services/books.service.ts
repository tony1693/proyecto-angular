import { Injectable } from '@angular/core';
import { Book } from '../shared/models/book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books:Book[] = this.setBooks();
  private url: string = "http://localhost:2000";
  constructor(private http: HttpClient) { }



  public getAll(): Book[] {
    return this.books;
  }

  public getOne(id_book:number):Book{ 
    const testBook:Book = {
      id_book: 0,
      title: 'I couldn`t find any book with this id',
      type: 'I couldn`t find any book with this id',
      author: '',
      price: 0,
      photo: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.webp',
      id_user: 0
    }
    return this.books.find(book => book.id_book ===id_book) || testBook;
  }

  public add(newBook:Book):void{
      this.books.push(newBook) ;
    }

  public edit(book: Book) {
    const indexBook = this.books.findIndex(editbook=> editbook.id_book === book.id_book);
    this.books[indexBook] = book;
    }
  
  public delete(id_book: number) {
    const indexBook = this.books.findIndex(book => book.id_book === id_book);
    this.books.splice(indexBook,1);
    }
    
  private setBooks():Book []{
    const books:Book [] = [
      {
        id_book:1,
        id_user:5,
        title:'Don Quijote de la Mancha',
        type:'Tapa dura',
        author:'Miguel de Cervantes',
        price:12.99,
        photo:'https://images-na.ssl-images-amazon.com/images/I/71fRMTejbyL.jpg',
      },
      {
        id_book:2,
        id_user:10,
        title:'Cinco semanas en globo',
        type:'Tapa dura',
        author:'Julio Verne',
        price:19.99,
        photo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Cinq_Semaines_en_ballon_001.png/800px-Cinq_Semaines_en_ballon_001.png',
      },
      {
        id_book:3,
        id_user:15,
        title:'Bodas de sangre',
        type:'Tapa dura',
        author:'Federico Garcia Lorca',
        price:29.99,
        photo:'https://static.cegal.es/imagenes/marcadas/9788437/978843760560.gif',
      }
    ];
    return books;
  }
  public getAllApi()  {
    return this.http.get(`${this.url}/books`);
  }

  public addApi (book:Book) {
    return this.http.post(`${this.url}/books`, book);
  }

  public updateApi (book: Book) {
    return this.http.put(`${this.url}/books?id=${book.id_book}`, book);
  }

  public deleteApi (book:Book) {
    return this.http.delete(`${this.url}/books?id=${book.id_book}`);

  }
  public getOneApi(id_book:number) {
    return this.http.get<Book>(`${this.url}/books?id=${id_book}`)
  }
}
