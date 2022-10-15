# ECom-ORM

## Description

```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Installation
The appication requires the following: Node.js, Express.js, mysql2, and Insomnia.</br>
Type in the command-line ```npm start``` to start the application. </br>
 To seed the database type in the command-line ```npm run seed```.
 To start the server type in the command-line ```node server.js```.
 Then open Insomnia and use the routes defined in the routes folder.

 ## Usage
The application allows a user to create, read, update and delete categories, products and tags.

## Functionality of the Application
Click [here]() for a demonstration video.


## License
MIT

