// @ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./Admin";
import VideoWrapper from "./pages/VideoWrapper";

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
    element: <div>t2</div>,
  },
  {
    path: "/t3",
    element: <div>t3</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
