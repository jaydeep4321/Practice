// Database Connection: Create a program that connects to a
// database like MongoDB or MySQL and retrieves data from it.
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const { MongoClient } = require("mongodb");

async function main() {
  const uri = process.env.DATABASE;

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("DB connected");

    //fetch data:
    // await findOneListingByName(client, "Infinite Views");
    await findOneListingByName(client, "The Forest Hiker");
  } catch (e) {
    console.error(e);
  }

  //   finally {
  //     await client.close();
  //   }
}

main().catch(console.error);

async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("jaydeepdb")
    .collection("tour")
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}
