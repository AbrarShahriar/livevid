import React, { useState } from "react";
import { HiPhoneMissedCall } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import ReactPlayer from "react-player";
import "./Wrapper.css";
import Webcam from "react-webcam";
import { useNavigate, useSearchParams } from "react-router-dom";
// @ts-ignore
import ringtone from "../assets/ringtone.mp3";
import { ThreeDots } from "react-loader-spinner";

const videoConstraints = {
  facingMode: "user",
};

const VideoWrapper = ({ url }) => {
  const navigate = useNavigate();
  const params = useSearchParams();
  const [callReceived, setCallReceived] = useState(false);

  return (
    <div className="vid__wrapper">
      {callReceived ? (
        <>
          <div className="name">
            {params[0].get("name") || "Samiha Tabassum"}
          </div>
          <ReactPlayer
            className="video"
            url={url}
            loop
            muted
            playing
            controls={false}
            width="100%"
            height="100%"
            pip={false}
          />
          <Webcam
            width="100%"
            className="camera"
            videoConstraints={videoConstraints}
            mirrored
          />

          <div className="controls">
            <div className="call__cut" onClick={() => navigate(`/`)}>
              <HiPhoneMissedCall size={24} />
            </div>
          </div>
        </>
      ) : (
        <div className="calling">
          <div className="header">
            <h2>{params[0].get("name") || "Samiha Tabassum"} calling...</h2>
            <ThreeDots
              height="40"
              width="40"
              radius="5"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          </div>
          <div className="call__receive" onClick={() => setCallReceived(true)}>
            <BiPhoneCall size={24} />
          </div>
          <audio autoPlay loop controls style={{ display: "none" }}>
            <source src={ringtone} type="audio/mpeg"></source>
          </audio>
        </div>
      )}
    </div>
  );
};
export default VideoWrapper;
