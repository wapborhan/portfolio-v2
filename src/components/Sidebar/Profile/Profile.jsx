import React from "react";
import Avatar from "./Avatar";
import Name from "./Name";
import Post from "./Post";

export default function Profile(props) {
  return (
    <div className="art-header">
      <Avatar
        image={props.profile.avatar}
        available={props.profile.available}
      />
      <Name name={props.profile.name} />
      <Post
        designation={props.profile.designation}
        companylink={props.profile.companylink}
        company={props.profile.company}
        availability={props.profile.availability}
      />
    </div>
  );
}
