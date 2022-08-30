import './App.css';
import { signInWithGoogle } from './Firebase';

function App() {
  return (
    <div className="App">
      <button onClick={signInWithGoogle} className="login-with-google-btn">Sign in with Google</button>
      <h1>{localStorage.getItem("name")}</h1>
      <h3>{localStorage.getItem("email")}</h3>
      <img src={localStorage.getItem("photo")} alt="" />
    </div>
  );
}

export default App;
