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
  // Pode-se obter o reducer inteiro ou a partir de uma função retornar apenas
  // uma parte do estado que se precisa. No caso está obtendo apenas a parte userReduce.
  const userLogIn = useSelector((store:RootStore) => store.userReduce);

  useEffect(() => {
    const getData = async () => {
      try {
        // O usuário não esta logado ou não tem um token sai da função.
        if (!userLogIn.isLogged || !userLogIn.token) return
        // Passa o token para a função que chama a API para verificar se
        // existe um usuário conectado. Pois é uma rota autenticada.
        // retornando os usuários cadastrados no banco de dados da API.
        const response = await listUsers(userLogIn.token)
        //const response = await listUsers("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJybXNAbG9jYWxob3N0LmNvbSIsImlhdCI6MTY2NzgzMTE1OX0.k5L6A92T98cqZip6qeua1LJMToIQ-R0B8JjCl7crw2I")
      
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
          <div key={user.id}>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </div>
        ))}
      </ul>
    </main>
  )
}