import React, { useEffect, useState } from "react";
import axios from "axios";
import { Video } from "./Video";
import * as VideoService from "./VideoService";
import VideoItem from './VideoItem'

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);

  const loadVideos = async () => {
    const res = await VideoService.getVideos();

    const formatedVideos = res.data.map(video => {
      return {
        ...video,
        createAt: video.createAt ? new Date(video.createAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
      }
    })
    .sort((a, b) => b.createAt.getTime() - a.createAt.getTime())

    setVideos(formatedVideos);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  return (
    <div className="row">
      {videos.map((video) => {
        return (
          <VideoItem video={video} key={video._id} loadVideos={loadVideos} />
        );
      })}
    </div>
  );
};

export default VideoList;
