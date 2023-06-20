# Bloggers

The web app is hosted in GitHub pages: [Bloggers Web App](https://kevintmtz.github.io/axented-frontend-challenge/)

<br>

# Install Dependencies

Run `npm install` inside this project folder to install all dependencies.

<br>

# Run in development

Run `ng serve` for the development server and navigate to `http://localhost:4200/`.

<br>

# Frontend Challenge

## Description

For this challenge, you will be creating a basic app for managing your favorite bloggers. You will be able to:

- Add a new blogger with their information
- View a list of your favorite bloggers
- Associate bloggers to each other
- Basic search functionality

## Requirements

Your project should include the following:

- Your project must include a README with instructions:
  - How to install dependencies
  - How to run in development

## Features

Using your preferred technology, please implement the following features:

- As a user, I should be able to create a new blogger with the following information:
  - Name
  - Website
  - Picture url
  - Email
- As a user, I should be able to see all the existing bloggers in a list
  - Name
  - Website
  - Picture
- As a user, I should be able to see a details page of a blogger with the following information
  - Picture
  - Name
  - Website
  - List of friends
  - Email
- As a user, I should be able to search bloggers by name or website
- As a user, I should be able to add a friend to a blogger (blogger has many blogger friends)

The last two features don't need to work with a BE (API,algolig), it can be just a mock. For example, for the search feature you can display an autocomplete list or redirect the user to a results page with mock data.

## Nice to have

Your application can include automated tests.

## Persistance

Data persistance is not required but highly encouraged. Feel free to use local storage, firebase or whatever you feel comfortable.

## Mock data

Whether you persist data or not, you may use this JSON to populate your initial app state.

```js
{
  bloggers: [
    {
      id: "1",
      name: "Juan Perez",
      website: "juanperez.io",
      picture_url: "https://placekitten.com/200/300",
      email: "conact@juanperez.io",
      friends: []
    },
    {
      id: "2",
      name: "Amano Pikamee",
      website: "pikamee.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@pikamee.io",
      friends: ["1"]
    },
    {
    id: "3",
    name: "Tony Stark",
    website: "tonystark.io",
    picture_url: "https://placekitten.com/200/300",
    email: "contact@tonystark.io",
    friends: ["1", "2"] #list of member_id
    }
  ]
}
```

## Delivery

We want to see your application working and code:

1. If you're using web technologies, please deploy your application to a free service like github pages. If you're creating a native app, please record your screen showing your application functionality.
1. To upload your code please clone this repository and when you're ready please create a new PR from your personal branch to the main branch. Assign your PR to Rodolfo Islas.
