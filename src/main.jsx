// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Admin";
import VideoWrapper from "./pages/VideoWrapper";
import Portrait from "./pages/Portrait";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/t1",
    element: (
      <VideoWrapper
        url={
          "https://firebasestorage.googleapis.com/v0/b/livevid-14cef.appspot.com/o/xvideos.com_d3c565a67a5907e9b5824437de1022a8113113273333.mp4?alt=media&token=ee70e106-0d6e-4d50-b2b7-c26616a0d101"
        }
      />
    ),
  },
  {
    path: "/t2",
    element: (
      <Portrait
        url={
          "https://firebasestorage.googleapis.com/v0/b/livevid-14cef.appspot.com/o/xvideos.com_887f232e48980ad728667d4e80755dc62125099099251111.mp4?alt=media&token=285bc59b-f69a-49b8-8fc0-ada10a6414f5"
        }
      />
    ),
  },
  {
    path: "/t3",
    element: (
      <VideoWrapper
        url={
          "https://firebasestorage.googleapis.com/v0/b/livevid-14cef.appspot.com/o/t3.mp4?alt=media&token=3ae9d0de-02f4-477f-bf94-407d415fe4b1"
        }
      />
    ),
  },
  {
    path: "/t4",
    element: (
      <VideoWrapper
        url={
          "https://firebasestorage.googleapis.com/v0/b/livevid-14cef.appspot.com/o/t4.mp4?alt=media&token=acebebed-2cce-4934-a803-f45e31b21403"
        }
      />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
