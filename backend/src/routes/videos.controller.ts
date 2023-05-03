// Imports
import {RequestHandler} from 'express'
import Video from './Video'

// Create Video
export const createVideo: RequestHandler = async (req, res) => {

    // Check if the URL already exits
    const videoFound = await Video.findOne({url: req.body.url})
    if (videoFound) { 
        return res.status(301).json({message: "The URL already exits"})
    }

    // Get client data
    const video = new Video(req.body)

    // Save into database
    const savedVideo = await video.save()

    // Response to the client
    res.json(savedVideo)
}

// Get Videos
export const getVideos: RequestHandler = async (req, res) => {

    try {
        // Search all the videos
        const videos = await Video.find()

        // Return the data
        return res.json(videos)
    } catch (error) {
        res.json(error)
    }
}

// Get Single Video
export const getVideo: RequestHandler = async (req, res) => {
    
    // Find the video by id
    const videoFound = await Video.findById(req.params.id)

    // Not Found video
    if (!videoFound) return res.status(204).json()

    // Return Video
    return res.json(videoFound)
}

// Delete Video
export const deleteVideo: RequestHandler = async (req, res) => {
    
    // Find the video by id
    const videoFound = await Video.findByIdAndDelete(req.params.id)

    // Not Found video
    if (!videoFound) return res.status(204).json()

    // Return Video
    return res.json(videoFound)
}

// Update Video
export const updateVideo: RequestHandler = async (req, res) => {
    
    // Find the video by id
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})

    // Not Found video
    if (!videoUpdated) return res.status(204).json()

    // Return Video
    return res.json(videoUpdated)
}