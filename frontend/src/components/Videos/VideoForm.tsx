import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Video } from "./Video";
import * as videoService from "./VideoService";
import { toast } from "react-toastify";
import { useNavigate, Link, useParams } from "react-router-dom";

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const VideoForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id)
    const { title, description, url } = res.data
    setVideo({title, description, url})
  }

  useEffect(() => {
    if (params.id){
      getVideo(params.id)
    }
  },[])

  const initialState = {
    title: "",
    description: "",
    url: "",
  };

  const [video, setVideo] = useState<Video>(initialState);

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!params.id) {
      await videoService.createVideo(video);
      setVideo(initialState);
    } else {
      await videoService.updateVideo(params.id, video);
    }

    navigate("/");
  };

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            {params.id ? <h3>Update Video</h3> : <h3>New Video</h3>}

            <form onSubmit={handleSubmit}>
              <div className="form-group py-2">
                <input
                  type="text"
                  name="title"
                  placeholder="Write a Title"
                  className="form-control"
                  onChange={handleInputChange}
                  autoFocus
                  value={video.title}
                />
              </div>

              <div className="form-group py-2">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group py-2">
                <textarea
                  name="description"
                  placeholder="Write a Description"
                  className="form-control"
                  onChange={handleInputChange}
                  rows={3}
                  value={video.description}
                />
              </div>

              {params.id ? (
                <button className="btn btn-outline-primary w-100">
                  Update Video
                </button>
              ) : (
                <button className="btn btn-outline-primary w-100">
                  Create Video
                </button>
              )}

              <Link className="btn btn-outline-dark w-100 mt-2" to="/">
                Back
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
