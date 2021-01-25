import React, { useEffect } from "react";

const Gmail = ({ acessToken, email }) => {
  useEffect(() => {
    fetch(
      `https://gmail.googleapis.com/gmail/v1/users/arisarkar.mail@gmail.com/messages`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          'Access_token':
            "ya29.a0AfH6SMCJewlO_tsoNlfaZ0RvdZFSc06fH6dXRQmeXo0RSpLYBp0gMMxyfT0nu1nd6kZKXSjodRxzKhH7No59VHDSrOQ457XfIMnpXlbf6h4y_e9So5vLHU09vzxyv7Zf6FusR-YYwIGWiW5yltZ4pUe-SVj7QTV6-277anwNMdk",
          'Authorization':
            "Bearer ya29.a0AfH6SMCJewlO_tsoNlfaZ0RvdZFSc06fH6dXRQmeXo0RSpLYBp0gMMxyfT0nu1nd6kZKXSjodRxzKhH7No59VHDSrOQ457XfIMnpXlbf6h4y_e9So5vLHU09vzxyv7Zf6FusR-YYwIGWiW5yltZ4pUe-SVj7QTV6-277anwNMdk",
        },
      }
    )
      .then(res => res.json())
      .then(re => console.log(re,"result"))
      .catch(err => console.log(err, "error"));
  });
  return <div></div>;
};

export default Gmail;
