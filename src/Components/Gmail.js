import React, { useEffect } from "react";

const Gmail = ({ acessToken, email }) => {
  useEffect(() => {
    fetch(
      `https://gmail.googleapis.com/gmail/v1/users/${email}/messages`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Access_token: acessToken,
          Authorization: `Bearer ${acessToken}`,
          'Access-Control-Allow-Origin': "https://happy-jennings-422b37.netlify.app",
          
        },
      }
    )
      .then(res => res.json())
      .then(re => console.log(re, "result"))
      .catch(err => console.log(err, "error"));
  });
  return <div></div>;
};

export default Gmail;
