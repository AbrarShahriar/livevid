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
          "https://firebasestorage.googleapis.com/v0/b/livevid-14cef.appspot.com/o/output.mp4?alt=media&token=6bd0b860-f173-4035-8ee1-ea0fc1c0ae12"
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
