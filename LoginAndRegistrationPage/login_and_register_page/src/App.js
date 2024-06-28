
import LoginRegister from './Components/LoginRegister/LoginRegister';
import Registerpage from './Components/Registerpage/Registerpage';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element ={<Registerpage password={password} username={username} showPassword={showPassword} handlePasswordChange={handlePasswordChange} handleUsernameChange={handleUsernameChange} toggleShowPassword={toggleShowPassword} />}/>
      <Route path="/login" element={<LoginRegister password={password} username={username} showPassword={showPassword} handlePasswordChange={handlePasswordChange} handleUsernameChange={handleUsernameChange} toggleShowPassword={toggleShowPassword}/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
