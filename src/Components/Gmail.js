import React, { useEffect } from "react";

const Gmail = ({ acessToken, email }) => {
  useEffect(() => {
    fetch(
      `https://gmail.googleapis.com/gmail/v1/users/arisarkar.mail@gmail.com/messages`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Access_token: acessToken,
          Authorization: `Bearer ${acessToken}`,
          Origin: "https://happy-jennings-422b37.netlify.app",
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
