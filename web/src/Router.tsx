import { Routes, Route } from "react-router-dom"

import { Home } from "./pages/home/Home"
import { Account } from "./pages/Account/Account"
import { Other } from "./pages/Other/Other"
import { NotFound } from "./pages/NotFound"
import Tasks from "./pages/Tasks/Tasks"

export const RoutesAPP = () => {
  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path="/account/:name" element={<Account />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}