import React from 'react'
import { PASSWORD_LOST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import Button from '../Form/Button'
import Input from '../Form/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const LoginPasswordLost = () => {
  const login = useForm()
  const {data, loading, error, request} = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    if(login.validate()) {
      const {url, options} = PASSWORD_LOST({
        login: login.value, 
        url:window.location.href.replace("perdeu", "resetar")
      })
      const {json} = await request(url, options)
    }
  }
  
  return (
    <section className='animeLeft'>
      <Head title="Perdeu a Senha"/>
      <h1 className='title'>Perdeu a senha?</h1>
      {data ? <p style={{color: "#4c1"}}>{data}</p> : <form onSubmit={handleSubmit}>
        <Input 
          label="Email / Usuário"
          type="text"
          name="email"
          {...login}
        />
        {loading ? <Button>Enviando...</Button> : <Button>Enviar Email</Button>}
      </form>}
      <Error error={error} />
    </section>
  )
}

export default LoginPasswordLost