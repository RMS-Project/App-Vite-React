import { useState } from 'react';
import Link from '../../components/Link';

// Importação do estilo CSS
import './home.css'

// Importação de imagens OBS: As imagens são tratadas como componentes.
import BackgroundImage from '../../components/RocketSVG/RocketSVG'

interface loginForm{
  email: string
  password: string
}

export const Home = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const [form, handleForm] = useState<loginForm>()

  function getForm() {
    /*handleForm([
      ...form,
      {
        email: email,
        password: password
      }
    ])*/
  }

  /*return (
      <div className='login'>

        <h1>Login</h1>

        <form onSubmit={ handleForm }>

          <label htmlFor="email">E-mail: </label>
          <input
            required={true}
            value={ email }
            onChange={ handleEmail }
            name="email"
            type="email" 
          />

          <label htmlFor="password">Senha: </label>
          <input
            required={true}
            value={ password }
            onChange={ handlePassword } 
            name="password" 
            type="password" />

          <button
            type='submit' 
          >
            Enviar
          </button>

        </form>
      </div>
    )*/

    return ( 
      <div className='login'>
        {/*<img src={BackgroundImage} alt="Rocket"/>*/}
        <BackgroundImage />
        <h1>Login</h1>

        <form onSubmit={ getForm }>

          <label htmlFor="email">E-mail: </label>
          <input
            required={true}
            name='email'
            type='email'
            placeholder='Informe seu e-mail'
            onChange={(event) => setEmail(event.target.value)}
          />

          <label htmlFor="password">Senha: </label>
          <input
            required={true}
            name='password'
            type='password'
            placeholder='Informe a senha'
            onChange={(event) => setPassword(event.target.value)}
          />

          <button
            type='submit' 
          >
            Enviar
          </button>
        </form>
        
        <div className='links'>
          <Link text="Não consegue entrar?" redirect="#"/>
          <Link text="Criar conta" redirect="#"/>
        </div>
      </div>
    )
  }