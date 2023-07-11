import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import SectionTitle from "../Templates/Text/SectionTitle";

export default function BlogGrid(props) {
  // console.log(props);

  return (
    <div className="container-fluid">
      <div className="row p-30-0">
        {/* heading */}
        <SectionTitle title={props.data.title} />

        {/* content */}

        <div className="d-flex mb-5 mt-5 justify-content-center">
          <div className="text-center mb-5 mt-5">Coming Soon...</div>
        </div>
        {/* {props.data.posts.map((item) => (
          <div className={"col-lg-" + 12 / props.column}>
            <BlogCard key={item.id} post={item} message={props.data.message} />
          </div>
        ))} */}
      </div>
    </div>
  );
}
