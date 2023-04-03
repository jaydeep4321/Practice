const { MongoClient } = require("mongodb");

async function main() {
  //   const uri =
  //     "mongodb://jaydeep:root@localhost:27017/practice?authMechanism=DEFAULT";

  const uri = "mongodb://jd:root@localhost:27017/?authMechanism=DEFAULT";

  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("DB connected");

    //create insert

    await createListing(client, {
      name: "Lovely Loft",
      summary: "A charming loft in Paris",
      bedrooms: 1,
      bathrooms: 1,
    });

    //create many

    await createMultipleListings(client, [
      {
        name: "Infinite Views",
        summary: "Modern home with infinite views from the infinity pool",
        property_type: "House",
        bedrooms: 5,
        bathrooms: 4.5,
        beds: 5,
      },
      {
        name: "Private room in London",
        property_type: "Apartment",
        bedrooms: 1,
        bathroom: 1,
      },
      {
        name: "Beautiful Beach House",
        summary:
          "Enjoy relaxed beach living in this house with a private beach",
        bedrooms: 4,
        bathrooms: 2.5,
        beds: 7,
        last_review: new Date(),
      },
    ]);
  } catch (e) {
    console.error(e);
  }

  //   finally {
  //     await client.close();
  //   }
}

main().catch(console.error);

async function createListing(client, newListing) {
  const result = await client
    .db("practice")
    .collection("reviews")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}

async function createMultipleListings(client, newListings) {
  const result = await client
    .db("practice")
    .collection("reviews")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listing(s) created with the following id(s):`
  );
  console.log(result.insertedIds);
}
