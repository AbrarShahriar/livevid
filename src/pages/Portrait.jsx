import React, { useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiPhoneMissedCall } from "react-icons/hi";
import { ThreeDots } from "react-loader-spinner";
import ReactPlayer from "react-player";
import { useNavigate, useSearchParams } from "react-router-dom";
import Webcam from "react-webcam";
// @ts-ignore
import ringtone from "../assets/ringtone.mp3";
import "./Portrait.scss";

const videoConstraints = {
  facingMode: "user",
};

const Portrait = ({ url }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [callReceived, setCallReceived] = useState(false);

  return (
    <div className={`portrait ${callReceived && "received"}`}>
      {callReceived ? (
        <>
          <div className="name">{params.get("name") || "Samiha Tabassum"}</div>
          <ReactPlayer
            url={url}
            loop
            muted
            playing
            controls={false}
            className={`video`}
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
            <h2>{params.get("name") || "Samiha Tabassum"} calling...</h2>
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
export default Portrait;
