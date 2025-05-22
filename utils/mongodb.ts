import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.production");
}

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable to preserve connection across hot-reloads.
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // In production, it's better to create a new connection per request (or rely on connection pooling)
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;