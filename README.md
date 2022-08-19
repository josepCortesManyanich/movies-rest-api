# Movie REST API

## Description

This is a the backend repository for a React application about a user's favorite movies.

---

## Instructions

⚠️ When cloning the project, change the <code>sample.env</code> file name for <code>.env</code> ⚠️. The project will run on **PORT 8000**.

Then, run:
```bash
npm install
```
- To start the project run:
```bash
npm run start
```
- To start the project in development mode, run:
```bash
npm run dev
```
- To seed the database, run:
```bash
npm run seed
```
---

## Models

### Movie

When retrieving data from the API, every movie will have the following properties:

```js
{
  "title": "Home Alone"
  "year": 1990,
  "director": "Chris Colombus",
  "duration": 103,
  "synopsis": "A kid is left alone at home while his family travels to Paris for Christmas. He then has to face two burglars with much creativity."
}
```

---

## API endpoints and usage 

| Action | Method    | Endpoint | Req.body            |
|--------|-------------|------|---------------------|
| GET all movies  | GET   | /api/v1/movies           | No   |                     | 
| GET single movie | GET    | /api/v1/:movieId | No |                      | 
| CREATE a movie | POST | /api/v1/movies   | Yes  | 
| DELETE a movie | DELETE    | /api/v1/:movieId | No |                      |
| EDIT a movie | PUT| /api/v1/:movieId   | Yes | 

---

## Tasks ✅

- Create the model `Movie`
- Create all the routes to be able to read, create, edit and delete movies and test them out with Postman
- Create an array of 4 movies of your own choosing and `seed` the database with them. Then, test on Postman if they have been created.



