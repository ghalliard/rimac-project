import UserGlobalContext from './website/context/userGlobalContext';
import PlanGlobalContext from './website/context/PlanGlobalContext';
import AppGlobalContext from './website/context/AppGlobalContext';
import Rutas from "./website/route/rutas";

const App = () => {
  return (
    <AppGlobalContext>
      <PlanGlobalContext>
        <UserGlobalContext>
          <Rutas />
        </UserGlobalContext>
      </PlanGlobalContext>
    </AppGlobalContext>
  )
}

export default App