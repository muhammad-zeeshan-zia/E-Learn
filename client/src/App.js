import Dashboard from "./pages/Dashboard/Dashboard";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Topbar from "./Components/Topbar/Topbar";
import Single from "./pages/Single/Single"
import Write from "./pages/Write/Write";
import Settings from "./pages/Setting/Setting";
import Contact from "./pages/Contact/Contact";
import {LoginProvider} from "./pages/Login/LoginContext";
import { Routes,Route, Navigate} from "react-router-dom";

  
function App() {
  return (  
    <>
   <LoginProvider>
    <Topbar/>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={ <Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about/:id" element={<Single/>} />
      <Route path="*" element={<Navigate to="/login" />} />   
      <Route  path="/setting"element={<Settings/>}/>
      <Route  path="/write"element={ <Write/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </LoginProvider>
    </>
  )
}

export default App;
