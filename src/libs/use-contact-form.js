import React, { useState } from "react"

const useContactForm = callback => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = async event => {
    if (event) {
      event.preventDefault()
    }
    const response = await fetch(
      "https://uy3ver4rzk.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }
    )
    const myJSON = await response.json()
    console.log(JSON.stringify(myJSON))
  }

  const handleInputChange = event => {
    event.persist()
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  return { inputs, handleSubmit, handleInputChange }
}

export default useContactForm
