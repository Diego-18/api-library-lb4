# API-Library-lb4

This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## <img src="https://image.flaticon.com/icons/png/512/969/969955.png" alt="support" width="40" height="40">  Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Settings and run books

Import the bd located in the data folder and create the database in MySQL.

Change connection data.

Run the following npm command.

```sh
npm start
```

Open http://127.0.0.1:3000/ in your browser or https://127.0.0.1:3000/books.

Delete : https://127.0.0.1:3000/books/delete/id

Update : https://127.0.0.1:3000/books/put/id

Count : https://127.0.0.1:3000/books/count

Add : http://127.0.0.1:3000/books/

{
  "title": "name-book",
  "author": "author-book",
  "genre": "genre-book",
  "year": "year-book"
}

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## <img src="https://image.flaticon.com/icons/png/512/390/390112.png" alt="support" width="40" height="40"> Technologies used

<img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" alt="js" width="30" height="30"/></br> NodeJS |
| --------- |