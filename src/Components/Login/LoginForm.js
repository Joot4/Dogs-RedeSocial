import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Input from '../Forms/Input'
import Button from '../Forms/Button'
import useForm from '../../Hooks/useForm'
import { TOKEN_POST, USER_GET } from '../api/api'



function LoginForm() {
  const username = useForm();
  const password = useForm();


// hook para pegar o usário do localstorage  
useEffect(()=>{
  const token = window.localStorage.getItem('token');
  if(token){
    getUser(token)
  }
}, [])

// função assíncrona para pegar o usuário com o token
async function getUser(token){
  const {url, options} = USER_GET(token);
  const response = await fetch(url , options);
  const json = await response.json();
  console.log(json)
}

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && password.validate()) {
      // função assíncrona para logar o usuário
      const { url, options} = TOKEN_POST({
        username: username.value, 
        password: password.value, 
      })
      

      const response = await fetch(url, options);
      const json =  await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name='username' {...username} />
        <Input label="Senha" type="password" name='password' {...password} />
        <Button>Entrar</Button>
      </form>

      <Link to='/login/criar'>Cadastro</Link>
    </section>
  )
}

export default LoginForm
