import logo from './logo.svg';
import './App.css';
import Fullname from './component/profil/Fullname';
import Adress from './component/profil/adress';
import Profil from './component/profil/profilPhoto';

function App() {
  return (
    <div className="App">
      <Fullname/>
     <Profil/>
      <Adress/>
    </div>
  );
}

export default App;
