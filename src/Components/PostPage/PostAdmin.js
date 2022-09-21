import React from "react";

import Sidebar from "../DashBoard/Sidebar";
import Post from "./Post";

const PostAdmin = () => {
  return (
    <div>
      <Sidebar>
        <Post/>
      </Sidebar>

    </div>
  );
};

export default PostAdmin;
