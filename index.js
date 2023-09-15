// app.js
const express = require('express');
const { PrismaClient } = require('@prisma/client');
const usersRouter = require('./users');
const postsRouter = require('./posts');

const prisma = new PrismaClient();
const app = express();
const port = 3000;

app.use(express.json());

// Database connection check
prisma.$connect()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });

// Define routes
app.use('/users', usersRouter); // Use the usersRouter for /users routes
app.use('/posts', postsRouter); // Use the postsRouter for /posts routes

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
