import React, { useState } from "react"

const useContactForm = callback => {
  const [inputs, setInputs] = useState({})
  const [disabled, setDisabled] = useState(false)

  const handleClearForm = event => {
    if (event) {
      event.preventDefault()
    }
    setInputs({})
  }

  const handleSubmitHelper = async event => {
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
    const res = await response
    return res
  }

  const postSubmit = data => {
    if (data.status === 200) {
      handleClearForm()
    }
    setDisabled(false)
  }

  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    setDisabled(true)
    handleSubmitHelper(event)
      .then(data => postSubmit(data))
      .catch(reason => console.log(reason.message))
  }

  const handleInputChange = event => {
    event.persist()
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }))
  }
  return { inputs, disabled, handleSubmit, handleInputChange, handleClearForm }
}

export default useContactForm
