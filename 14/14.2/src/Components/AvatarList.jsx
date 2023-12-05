import React from "react";
import Avatar from "./Avatar";

export default function AvatarList({avatarList}) {
  return (
    <div id="main-container">
      {avatarList &&
        avatarList.map((user, i) => <Avatar user={user} key={i} />)}
    </div>
  );
}
