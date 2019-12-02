import React, { useState } from "react"

const useContactForm = callback => {
  const [inputs, setInputs] = useState({})

  const handleClearForm = event => {
    if (event) {
      event.preventDefault()
    }
    setInputs({})
  }

  const handleSubmit = async event => {
    if (event) {
      event.preventDefault()
    }
    const response = await fetch(
      "https://uy3ver4rzk.execute-api.us-east-1.amazonaws.com/dev/static-site-mailer",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      }
    )
    const myJSON = await response.json()
    if (myJSON.target.status === 200) {
      handleClearForm()
      console.log("Success!")
    } else {
      console.log(
        "Failed because of: " + JSON.parse(myJSON.target.response).message
      )
    }
  }

  const handleInputChange = event => {
    event.persist()
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  return { inputs, handleSubmit, handleInputChange, handleClearForm }
}

export default useContactForm
