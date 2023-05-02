import {Router} from 'express'
const router = Router()
import * as videoController from './videos.controller'

router.get('/videos', videoController.getVideos)

router.get('/videos/:id', videoController.getVideo)

router.post('/videos', videoController.createVideo)

router.delete('/videos/:id', videoController.deleteVideo)

router.put('/videos/:id', videoController.updateVideo)

export default router