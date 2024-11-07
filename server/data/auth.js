import MongoDb from "mongodb";
import { getUsers } from "../database/database.js";

const ObjectID = MongoDb.ObjectId;

export async function findByUsername(username) {
  return getUsers().findOne({ username }).then(mapOptionalUser);
}

export async function findById(id) {
  return getUsers()
    .findOne({ _id: new ObjectID(id) })
    .then(mapOptionalUser);
}

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}

function mapOptionalUser(user) {
  return user ? { ...user, id: user._id.toString() } : user;
}
