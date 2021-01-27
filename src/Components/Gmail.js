import React from "react";

const Gmail = ({ acessToken, email }) => {
  fetch(
    `https://cors-anywhere.herokuapp.com/https://gmail.googleapis.com/gmail/v1/users/${email}/messages`,
    {
      method: "GET",
      headers: {
        access_token: acessToken.access_token,
        authorization: `Bearer ${acessToken.access_token}`,
      },
    }
  )
    .then(re => console.log(re, "result"))
    .catch(err => console.log(err, "error"));
  return <div></div>;
};

export default Gmail;
