import './App.css';
import './style.css';
import ProfilePhoto from './component/profil/ProfilePhoto';
import FullName from './component/profil/FullName';
import Address from './component/profil/address';

function App() {
  return (
    <div className="App">
       <ProfilePhoto/>
       <FullName/>
       <Address/>
      
    </div>
  );
}

export default App;
