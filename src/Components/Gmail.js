import React, { useEffect } from "react";

const Gmail = ({ acessToken, email }) => {
  useEffect(() => {
    fetch(
      `https://gmail.googleapis.com/gmail/v1/users/${email}/messages`,
      {
        method: "GET",
        headers: {
          Access_token: acessToken,
          Authorization: `Bearer ${acessToken}`,
        },
      }
    )
      .then(re => console.log(re, "result"))
      .catch(err => console.log(err, "error"));
  },[]);
  return <div></div>;
};

export default Gmail;
