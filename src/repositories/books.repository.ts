import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {BooksDataSource} from '../datasources';
import {Books, BooksRelations} from '../models';


/**
 * Linking of model, driver and book datasource (Custom-API)
 * */
export class BooksRepository extends DefaultCrudRepository<
  Books,
  typeof Books.prototype.id,
  BooksRelations
> {
  constructor(
    @inject('datasources.books') dataSource: BooksDataSource,
  ) {
    super(Books, dataSource);
  }
}
