import React from 'react'

const types = {
  email: {
    regex:/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    message:"Preencha um email válido"
  },
  password: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/,
    message:"A senha deve conter 1 caracter maíusculo, 1 minúsculo e 1 dígito.\nCom no mínimo 8 caracteres."
  },
  number: {
    regex: /^\d+$/,
    message:"Utilize números apenas"
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState(null)

  function validate(value) {
    if(type === false) return true
    if(value.length === 0) {
      setError("Preencha um valor.")
      return false
    } else if(types[type] && !types[type].regex.test(value)) {
      setError(types[type].message)
      return false
    } else {
      setError(null)
      return true
    }
  }

  function onChange({target}) {
    if(error) validate(target.value)
    setValue(target.value)
  }

  return ({
    value, 
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onblur: () => validate(value)
  })
}

export default useForm