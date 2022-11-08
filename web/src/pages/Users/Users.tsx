import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { listUsers } from "../../services/MainApi/users";
import { RootStore } from "../../store";

interface User {
  id: string;
  name: string;
  email: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  // A partir do store do Redux, obter os dados do usuário logado.
  const userLogIn = useSelector((store:RootStore) => store.userReduce);

  console.log(userLogIn)

  useEffect(() => {
    const getData = async () => {
      try {
        if (!userLogIn.isLogged || !userLogIn.token) return
        // Passa o token para a função que chama a API para verificar se
        // existe um usuário conectado. Pois é uma rota autenticada.
        const response = await listUsers(userLogIn.token)
      
        setUsers(response.data)
      
      } catch (error) {
        alert("Deu algo errado")
      }
    };

    getData()
  }, [setUsers])

  return (
    <main>
      <h1>Lista de Usuários</h1>
      <p>O email do usuário logado é: {userLogIn.email}</p>
      <ul>
        {users.map((user) => (
          <div id={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </div>
        ))}
      </ul>
    </main>
  )
}