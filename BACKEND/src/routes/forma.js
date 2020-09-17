import express from "express";
import mongo from "mongodb";
const { ObjectID } = mongo;
import connect from "../db.js";
import verify from "../protectedRoutes.js";

const router = express.Router();

router.post("/:kljuc", verify, async (req, res) => {
  let db = await connect();

  let prof_id = req.params.kljuc;

  let forma = req.body;
  let id = new ObjectID();
  let formaWId = { _id: id, ...forma };

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
});

export default router;
