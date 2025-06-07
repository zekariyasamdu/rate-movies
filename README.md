# Movie Rater

A simple web application for rating movies, allowing users to discover and review films.
Features

  Movie Search: Search for movies using the IMDb API.
  Movie Details: View detailed information about individual movies.
  Rating System: Rate movies. (Further details on how ratings are stored and displayed would be added here if the feature is fully implemented.)

# Technologies Used

  Frontend: React.js
  API: IMDb API

# Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

Before you begin, ensure you have the following installed:

  Node.js: Download & Install Node.js (includes npm)
  Git: Download & Install Git
Installation

    git clone https://github.com/zekariyasamdu/rate-movies.git
    cd rate-movies

#  Install frontend dependencies:
Bash

     npm install

# API Key Setup

This project uses an external API to fetch movie data. It is crucial to set up your API key securely.

  Obtain an API Key: from IMDB API
      
  Create a .env file:

  In the root directory of your rate-movies project, create a new file named .env.

  Add your API Key to .env:

  Add the following line to your .env file, replacing YOUR_IMDB_API_KEY with the actual key you obtained:

    REACT_APP_IMDB_API_KEY=YOUR_IMDB_API_KEY
