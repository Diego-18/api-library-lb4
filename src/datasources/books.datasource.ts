import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

/**
 * Settings connections
 * */
const config = {
  name: 'books',
  connector: 'mysql',
  url: 'mysql://desarrollos:desarrollos2021@localhost/library',
  host: 'localhost',
  port: 3306,
  user: 'desarrollos',
  password: 'desarrollos2021',
  database: 'library'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class BooksDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'books';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.books', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
