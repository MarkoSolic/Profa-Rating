import express from 'express'
import mongo, { ObjectID } from 'mongodb'

import connect from '../db'
import verify from '../protectedRoutes'


const router = express.Router()

router.post('/:kljuc', verify, async (req, res) => {
    let db = await connect()

    let prof_id = req.params.kljuc
    let forma = req.body
    let id = new ObjectID()

    try {
        await db.collection("predavaci").updateOne(
            { _id: mongo.ObjectId(prof_id) },
            {
                $push: {
                    "forma": {
                        _id: id,
                        forma: forma
                    }
                }
            })

        res.send({
            id: _id,
            message: "success."
        })

    } catch (err) {
        res.status(400).send(err)
    }
})

export default router