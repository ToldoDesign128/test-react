import { Counter } from "./components/Counter";
import { Lista } from "./components/Lista";
import { Logged } from "./components/Logged";
import { Benvenuto } from "./components/Welcome";
import { Timer } from "./components/Timer";

import { UserProfile } from "./components/UserProfile";
import './App.css';

function App() {
  return (
    <div className="container">
      {/* Props nome */}
      <Benvenuto nome="Federico" saluta={() => alert("Ciao Federico")} />
      <Benvenuto nome="Flavio" saluta={() => alert("Ciao Flavio")} />
      <Benvenuto nome="Flora" saluta={() => alert("Ciao Flora")} />

      {/* Counter */}
      <Counter />

      {/* Rendering condizzionale */}
      <Logged isLoggedIn="true" nome="Utente Loggato" />

      {/* Lista Array */}
      <Lista />

      {/* Timer */}
      <Timer />

      {/* UserProfile */}
      <UserProfile name="Federico" age={28} hobbies={["Magic", "Coding", "Graffiti"]}>
        <p>Cavolo bello</p>
      </UserProfile>
    </div>
  );
}

export default App;