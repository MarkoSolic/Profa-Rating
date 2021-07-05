import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

import connect from '../db'
import { registerValidation, loginValidation } from '../validation'

const router = express.Router()

router.post('/register', async (req, res) => {

    const db = await connect()

    //provjerava da li je data ispravan prije nego sto se salje u bazu
    const { error } = registerValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //provjerava dal isti user vec postoji
    const emailExists = await db.collection('users').findOne({ email: req.body.email })
    if (emailExists) return res.status(400).send('email already in use.')

    //hashing the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10)

    const user = {
        email: req.body.email,
        password: hashedPassword,
        faks: req.body.faks
    }
    try {
        await db.collection('users').insertOne(user)
        res.status(200).send('success.')
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {

    const db = await connect()

    //provjerava da li je data ispravan prije nego sto se salje u bazu
    const { error } = loginValidation(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    //provjerava dal isti user vec postoji
    const user = await db.collection('users').findOne({ email: req.body.email })
    if (!user) return res.status(400).send('Email does not exist.')

    //provjeriti dal je pw ispravan
    const pwExists = await bcrypt.compare(req.body.password, user.password)
    if (!pwExists) return res.status(400).send('Invalid password.')

    //Izrada tokena
    const token = jwt.sign({
        _id: user._id,
        email: user.email,
    }, process.env.TOKEN_SECRET, {
        expiresIn: '1 week'
    })
    res.send({
        token: token,
        email: user.email,
        faks: user.faks
    })
})

export default router