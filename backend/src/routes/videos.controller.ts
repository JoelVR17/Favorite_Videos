import {RequestHandler} from 'express'
import Video from './Video'

export const createVideo: RequestHandler = async (req, res) => {

    // Get client data
    const video = new Video(req.body)

    // Save into database
    const savedVideo = await video.save()

    // Response to the client
    res.json(savedVideo)
}

export const getVideos: RequestHandler = (req, res) => {
    res.json('getting videos')
}

export const getVideo: RequestHandler = (req, res) => {
    res.json('getting single video')
}

export const deleteVideo: RequestHandler = (req, res) => {
    res.json('deleting videos')
}

export const updateVideo: RequestHandler = (req, res) => {
    res.json('updating videos')
}