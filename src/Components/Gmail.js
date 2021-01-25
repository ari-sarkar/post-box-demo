import React, { useEffect } from 'react'

const Gmail = ({ acessToken, email }) => {
useEffect(() => {
    fetch(`https://gmail.googleapis.com/gmail/v1/users/${email}/messages`,{
        headers: {
            acess_token :  acessToken
        }
    }).then(res => console.log(res,"response"))
    .catch(err => console.log(err, "error"))
})
    return (
        <div>
            
        </div>
    )
}

export default Gmail
