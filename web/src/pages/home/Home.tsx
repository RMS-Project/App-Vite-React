import { useState } from 'react';
import Link from '../../components/Link';


// Importação do estilo CSS
import './home.css'

// Importação de imagens OBS: As imagens são tratadas como componentes.
import BackgroundImage from '../../components/RocketSVG/RocketSVG'
import { login } from '../../services/MainApi/login';

/*interface loginForm{
  email: string
  password: string
}*/

export const Home = () => {

  // useState - Retorna um Array.
  // Um estado sempre sobrescreve o anterior.
  // Quando se deseja acumular valores utilize ex: "[...email, email]".
  // OBS: Tudo o que estava anteriormente mais o novo.
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  //const [form, handleForm] = useState<loginForm>()

  async function getForm(event :React.FormEvent) {
    event.preventDefault()

    // Redux
    try {
      const response = await login({ email, password })
      console.log(response.data)

      alert("Deu certo")

    } catch (error) {
      alert("Deu algo errado")
    }

    // Aqui enviamos para a rota do servidor.

    /*handleForm({
      email: email,
      password: password
    })

    if (form?.password == '123') {
      console.log(form)
      return
    }

    console.log("Senha incorreta")*/
  }

    return ( 
      <div className='login'>
        {/*<img src={BackgroundImage} alt="Rocket"/>*/}
        <BackgroundImage />
        <h1>Login</h1>

        <form onSubmit={getForm}>

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

          <button type='submit'>
            Entrar
          </button>
        </form>
        
        <div className='links'>
          <Link text="Não consegue entrar?" redirect="/other"/>
          <Link text="Criar conta" redirect="/account/Usuário"/>
        </div>
      </div>
    )
  }