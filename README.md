# ScaleUp API

Minimal Express setup with logging and Swagger documentation (using ES modules).

## Available scripts

- `npm start` - run production server (ESM enabled via `type": "module"`)
- `npm run dev` - start server with nodemon for development

## Logging

Uses **winston** for application logs and **morgan** to log HTTP requests through winston.

## Utilities

Helper modules (logger, swagger spec, and DB connection) live in the `src/utils` folder.

## API Documentation

Swagger UI is available at [`/api-docs`](http://localhost:3000/api-docs) once the server is running.

## Getting started

1. Install dependencies: `npm install`
2. Create a `.env` file in the project root containing a valid `MONGO_URI` (dotenv is used to load it). Example:
   ```env
   MONGO_URI=mongodb://localhost:27017/scaleup
   ```
   (If `MONGO_URI` is absent, the app will try the local default URI.)
3. Start server: `npm run dev`
4. Open browser to `http://localhost:3000/api-docs`
