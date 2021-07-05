import express from 'express'

import connect from '../db'
import verify from '../protectedRoutes'

const router = express.Router()

router.get('/predavaci/:faks', verify, async (req, res) => {
    let db = await connect()
    let fakultet = req.params.faks

    let cursor = await db.collection("predavaci").find({ faks: fakultet })
    let results = await cursor.toArray()

    res.json(results)
})


export default router