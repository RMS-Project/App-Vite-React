import { configureStore } from "@reduxjs/toolkit";

// Configuração da store.
const store = configureStore({
    // Redux que faram parte do projeto.
    reducer: {}
})

// Tipagem de acesso para os componentes.
export type RootStore = ReturnType<typeof store.getState>

export default store

// Prove o acesso ao store pelo APP da aplicação em main.tsx