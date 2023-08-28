import UserGlobalContext from './website/context/userGlobalContext';
import Rutas from "./website/route/rutas";

const App = () => {
  return (
    <UserGlobalContext>
        <Rutas />
    </UserGlobalContext>
  )
}

export default App