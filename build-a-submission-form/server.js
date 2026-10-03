import express from "express";
import apiRouter from "./routes/api.routes.js";
import { notFoundHandler, finalErrorHandler } from "./middleware/error.middleware.js";

const app = express();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Middlewares to parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mount the API router
app.use("/api", apiRouter);

// Error handlers middleware
app.use(notFoundHandler);
app.use(finalErrorHandler);