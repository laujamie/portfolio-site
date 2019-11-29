import React, { useState } from "react"

const useContactForm = callback => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = event => {
    if (event) {
      event.preventDefault()
    }
    console.log(JSON.stringify(inputs))
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
