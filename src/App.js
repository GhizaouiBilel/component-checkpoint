import "./App.css";
import Adress from "./components/profil/Adress";
import Foooter from "./components/profil/Foooter";
import FullName from "./components/profil/FullName";
import Navbar from "./components/profil/Navbar";
import ProfilePhoto from "./components/profil/ProfilePhoto";

function App() {
  return (
    <div className="parent">
      <Navbar />
      <ProfilePhoto />
      <FullName />
      <Adress />
      <Foooter/>
    </div>
  );
}

export default App;
