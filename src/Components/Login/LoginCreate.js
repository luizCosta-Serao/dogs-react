import React from 'react'
import { USER_POST } from '../../api'
import useFetch from '../../Hooks/useFetch'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Button from '../Form/Button'
import Input from '../Form/Input'
import Error from '../Helper/Error'
import Head from '../Helper/Head'

const LoginCreate = () => {
  const username = useForm()
  const email = useForm("email")
  const password = useForm()

  const {userLogin} = React.useContext(UserContext)
  const {loading, error, request} = useFetch()

  async function handleSubmit(e) {
    e.preventDefault()
    const {url, options} = USER_POST({
      username:username.value,
      email:email.value,
      password:password.value,
    })
    const {response} = await request(url, options)
    if(response.ok) userLogin(username.value, password.value)
    console.log("handleSubmit")
  }

  return (
    <section className='animeLeft'>
      <Head title="Crie a sua conta"/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input 
          label="Usuário"
          type="text"
          name="username"
          {...username}
        />
        <Input 
          label="Email"
          type="email"
          name="email"
          {...email}
        />
        <Input 
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        {loading ? <Button disabled>Cadastrando....</Button> : <Button>Cadastrar</Button>}
        <Error error={error}/>
      </form>
    </section>
  )
}

export default LoginCreate