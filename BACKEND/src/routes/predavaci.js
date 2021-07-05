import express from 'express'

import connect from '../db'
import verify from '../protectedRoutes'

const router = express.Router()

router.post('/:faks', verify, async (req, res) => {
    let db = await connect()
    const fakultet = req.params.faks
    const user = req.body.email
    
    const cursor = db.collection('predavaci').find({
        $and: [ {'forma.userEmail': {$ne: user}}, { faks : fakultet}]});
    let results = await cursor.toArray()


    res.json(results)
})

router.post('/ispunjeni/:faks', verify, async (req, res) => {
    let db = await connect()
    const fakultet = req.params.faks
    const user = req.body.email
    
    const cursor = db.collection('predavaci').find({
        $and: [ {'forma.userEmail': user}, { faks : fakultet}]});
    let results = await cursor.toArray()
 

    res.json(results)
})

export default router