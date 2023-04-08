# codedeets
App to support collaboration with many peeps on code and other related interests

## App Summary
Access the app at this URL:  http://codedeets.us-east-2.elasticbeanstalk.com/
This project is a small app meant for developers to collaborate on ideas and provide
informative posts on how to solve problems. The main reason for the app is to allow
a central resource for developers and up-and-coming coders to share resources and
information. Posts allow for a `.md` file to be uploaded that has useful info within
similar to README.md files in Github.

File uploads are restricted to `.md` types only and are tied to posts that only
authenticated (logged-in) users can create.

## Frontend layout:
<img src="./assets/frontend_page_views.svg">

## Getting Started page:
<img src="./assets/Getting Started Mock-up.png">

## External Resources page:
<img src="./assets/External Resources.png">

## User Profile page:
<img src="./assets/User Profile.png">

## Backend Data ERD
<img src="./assets/backend_data_ERD.svg">

## API Routes
| Method |           Path           |                      Purpose                     |
|:------:|:------------------------:|:------------------------------------------------:|
|   GET  |            /             |                        Home                      |
|   GET  |          /user           |                  Return all users                |
|   GET  |        /user/:id         |                  Return user by id               |
|   GET  |          /posts          |                  Return all posts                |
|   GET  |        /posts/:id        |                  Return post by id               |
|   PUT  |        /user/:id         |                Update user info by id            |
|   PUT  |        /posts/:id        |                  Update post by id               |
|  POST  |          /auth           |            Setup Authentication for user         |
|  POST  |          /user           |                   Create new user                |
|  POST  |          /posts          |                   Create new post                |
| DELETE |        /user/:id         |                 Delete a user by id              |
| DELETE |        /posts/:id        |                 Delete a post by id              |

## Steps to start app for development

1.) cd into the `server` directory, create a `.env` file with the following:

```
PORT=5000
CONFIG="postgres://username:password@127.0.0.1:5432/database_name"
JWT_SECRET="any_string_you_choose_here"
```

If you already have a remote hosted SQL instance setup, just adjust the connection string for the `CONFIG`
param as needed and refer to their documentation (ElephantSQL, AWS, etc.)

2.) Run this command to install all the dependencies:

```
npm i
```

3.) Make sure postgres is setup and available on your machine (using a tool like pgAdmin or similar).

4.) Run the following commands using `sequelize` to setup the database and needed tables for `posts` and `user`:

```
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

If you need to drop all the tables and start from scratch prior, run this command to drop the database:

```
npx sequelize-cli db:drop
```

5.) Run the following commands to start the server:

```
npm start
```

You should see a `Server running... on port port_number_you_specified_in_env` message if all is successful.

6.) cd into the `client` directory and run the following commands to start the frontend:

```
npm i --legacy-peer-deps
npm start
```

If all goes well, you should see your browser load routed to `localhost:3000` with the UI present.
