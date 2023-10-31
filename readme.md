# Book Management API

This RESTful API allows users to manage books, including creating, reading, updating, and deleting book records. It uses Node.js and MongoDB to store and manage book data.

## Table of Contents

1. [Features](#features)
2. [API Endpoints](#api-endpoints)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Video Demonstration](#video-demonstration)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)

## Features

- Create a new book with title, author, and summary.
- View a list of all books.
- View details of a specific book by its ID.
- Update a book's details.
- Delete a book.

## API Endpoints

- `POST /api/books`: Create a new book. Provide the book's details in the request body.
- `GET /api/books`: Retrieve a list of all books.
- `GET /api/books/:id`: Retrieve the details of a specific book by its ID.
- `PATCH /api/books/:id`: Update a book's details by its ID.
- `DELETE /api/books/:id`: Delete a book by its ID.

## Prerequisites

Before getting started, ensure you have the following prerequisites:

- Node.js and npm installed.
- MongoDB set up and running.

## Installation

1. Clone the repository to your local machine:

2. Install project dependencies:

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

- `MONGODB_URI`: The connection URL for your MongoDB database.
- `PORT`: The port on which the server will run (default: 8000).

Example `.env` file:

## Usage

To start the API, run the following command:

The API will be accessible at `http://localhost:1100`.

THE LINK TO THE VIDEO IS - https://youtu.be/vPcIH2Pfs6Q
