# like-system-server

Running scripts:

```
npm install
npm run start
```

Development scripts:

```
npm run dev
```

In order to use your own database, you need to write data to connect to the database in .env file:

```
MONGO='mongodb+srv://<user>:<password>@cluster0.csq1c.mongodb.net/counters?retryWrites=true&w=majority'
```

The example contains a API implementation for one counter entity:

| Method | Endpoints   | Description                                                |
| ------ | ----------- | ---------------------------------------------------------- |
| POST   | api/        | Create counter                                             |
| GET    | api/        | Get a list of all counters in descending order of likes    |
| GET    | api/:id     | Get by ID                                          |
| PUT    | api/:id     | Update by ID                                       |
| DELETE | api/:id     | Delete by ID                                       |

The client-side (scene) through which you can make a request to the server is located here: [like-system-scene](https://github.com/demid-osman/like-system-scene) 