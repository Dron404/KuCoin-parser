# KuCoin-parser

# Installation and Running

## Prerequisites

- Node.js and npm installed on your machine
- PostgreSQL database

## Installation

- Clone the repository:

  ```bash
  git clone <repository_url>
  cd <project_directory>

  ```

- Install dependencies:

```bash
npm i
```

- Create a .env file in the root directory and add the following environment variables:

```json
PORT=3000
DATABASE_URL=your_database_url
```

## Running

- Build the project:

```bash
  npm run build
```

- Start the server:

```bash
  npm start
```

- Start the server in development mode:

```bash
  npm run start:dev
```

- Start the server in production mode:

```bash
  npm run start:prod
```

## Swagger Documentation
- Swagger API documentation is available at:

- http://localhost:3000/api/docs#/
- Please make sure to replace 3000 with the port specified in your .env file.


