import express from "express";
import mongo from "mongodb";
const { ObjectID } = mongo;
import connect from "../db.js";
import verify from "../protectedRoutes.js";

const router = express.Router();

router.post("/:kljuc", verify, async (req, res) => {
  let db = await connect();

  let prof_id = req.params.kljuc;

  const forma = req.body;
  const id = new ObjectID();

  const formaWId = { ...forma, _id: id };

  let valuesArray = Object.values(formaWId);
  const usersEmail = valuesArray[valuesArray.length - 2];

  const user = await db.collection("users").findOne({ email: usersEmail });

  if (!user) res.status(400).send("Ne postoji email adresa.");
  else {
    try {
      await db.collection("predavaci").updateOne(
        { _id: mongo.ObjectId(prof_id) },
        {
          $push: {
            forma: formaWId,
          },
        }
      );

      res.send({
        id: id,
        message: "success.",
      });
    } catch (err) {
      res.status(400).send(err);
    }
  }
});

export default router;
