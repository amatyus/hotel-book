const express = require('express')
const Rooms = require('../models/Rooms')
const auth = require('../middleware/auth.middleware')
const {generateUserData} = require('../utils/helper')
const router = express.Router({mergeParams: true})

router.patch('/:roomId', auth, async (req, res) => {
  try {
    const {roomId} = req.params

    if (roomId === req.room._id) {
      const updatedRoom = await Rooms.findByIdAndUpdate(roomId, req.body, {
        new: true
      })
      res.send(updatedRoom)
    } else {
      res.status(401).json({message: 'Unauthorized'})
    }
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

router.get('/', auth, async (req, res) => {
  try {
    const list = await Rooms.find()
    res.send(list)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

router.post('/', auth, async (req, res) => {
  try {
    const newRoom = await Rooms.create({
      ...generateUserData(),
      ...req.body
    })
    res.status(201).send(newRoom)
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

router.delete('/:roomId', auth, async (req, res) => {
  try {
    const {roomId} = req.params
    const removedRoom = await Booking.findById(roomId)

    if (removedRoom.userId.toString() === req.user._id) {
      await removedRoom.remove()
      return res.send(null)
    } else {
      res.status(401).json({message: 'Unauthorized'})
    }
  } catch (e) {
    res.status(500).json({
      message: 'На сервере произошла ошибка. Попробуйте позже'
    })
  }
})

module.exports = router
