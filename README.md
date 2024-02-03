# Node Contacts CLI app

This is simple contacts CLI application built with Node.js and Commander.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [UI Library and External Libraries](#ui-library-and-external-libraries)
- [Additional Notes](#additional-notes)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [https://nodejs.org/](https://nodejs.org/) with updated LTS version

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/Elizabethhub/goit-node-cli.git
```

2. Navigate to the project directory:

```bash
   cd goit-node-cli
```

3. Install dependencies:

```bash
   npm install
```

## Running the Application

To run the application locally, follow these steps:

```bash
npm start
```

## Usage

- Get a list of all contacts: "node index -a list".
- Get a contact by id: "node index -a get -i 05olLMgyVQdWRwgKfg5J6".
- Add a new contact by typing in the command line "node index -a add -n Mango -e mango@gmail.com -p 322-22-22".
- Remove a contact by id: "node index -a remove -i qdggE76Jtbfd9eWJHrssH".
