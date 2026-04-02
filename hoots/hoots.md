# Hoot (Project 3)

## Background

Idea is that this is my Project 3 -> Hoot (Blog with comments and Users)

## Tech

MERN -> Mongodb, Express, React, Node

We are going to use 1 github repo, but inside the repo there 2 folders

- frontend -> Netlify (Project 2)
- backend -> Render / Railway (Project 3)

Each one will be deployed to a seperate host

## User Stories

Need to make sure you have ALL elements of CRUD -> Create, Read, Update, Delete across the Project

- As a guest, I should be able to create an account.
- As a new user with an account, I should be able to log in to my account.
- As a user, I should be able to create a hoot post.
- As a user, I should be able to see a list of all hoots on a ‘List’ page.
- As a user, clicking on a hoot in the ‘List’ page should navigate me to a hoot’s ‘Details’ page to view information about a single hoot post and its associated comments.
- As a user, I should be able to add a comment on a hoot’s ‘Details’ page.
- As the author of a hoot, I should see a link to ‘Edit’ a hoot on the ‘Details’ page. Clicking on the link should direct me to an ‘Edit’ page where I can modify the hoot. Upon submitting the update, I should be redirected back to the ‘Details’ page.
- As the author of a hoot, I should see a button to ‘Delete’ a hoot on the ‘Details’ page. Clicking the button should delete the hoot and redirect me back to the ‘List’ page.

## Wireframe

- Think about how to layout UI (JSX) -> [Samples](https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-hoot-front-end/setting-the-stage/)

### Components

- App
- Navbar
  - SignupForm
  - SigninForm
  - Landing
  - HootList
  - HootDetails
    - CommentForm
  - CreateHootForm
  - EditHootForm

### Client side URLs

React Router like Project 2, RESTful URLs

/hoots -> HootList
/hoots/:hootId -> HootDetails
/hoots/new -> CreateHootForm

More to come

### CSS Styling (think about it now)

- Tailwind
- React Component Library -> React Bootstrap

## Data Model

2 (Blog + embedded Comments) + 1 (User)

To show me this, rather than doing ERD

Create your sample data in Google Sheet

### User

id, username, hashedPassword
SSS, simon, 123
KKK, kerin, 456

### Hoot

id, title, text, category, author, comments
111, Learning MERN, This is so tough, Tech, SSS, []
222, Playing football, This is so fun, Sports, KKK, []

Rationale

- somethings when you get things, harder to explain if you did not this
- this can be used as sample data

### Backend RESTful Routes

Suggest that all backend routes start with /api/...

POST create 201, 400 /api/users Sign up a User

POST create 201, 400 /api/hoots Create a hoot
GET index 200 /api/hoots List hoots
GET show 200, 404 /api/hoots/:hootId Get a single hoot
PUT update 200, 400 /api/hoots/:hootId Update a hoot
DELETE deleteHoot 204, 404 /api/hoots/:hootId Delete a hoot
POST createComment 201, 400 /api/hoots/:hootId/comments Create a comment

For all of these, there is chance you get back a 500

## Tue Mar 31

Start from the express

- Create a User -> Signup a User

- Create a User model + schema
- Create a Bruno test file
  - /api/users
  - POST
  - Data -> Body
