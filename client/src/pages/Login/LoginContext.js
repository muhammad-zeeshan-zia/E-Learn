import { createContext ,useContext,useState} from "react";


const LoginContext=createContext(null);
export function useLogin(){
    return useContext(LoginContext);
}

export  function LoginProvider({children})
{

    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [ID, setID] = useState('');
    const [about,setAbout]=useState("");
    return(
        <LoginContext.Provider value={{username,email,profilePic,loggedIn,setLoggedIn,setUsername,setEmail,setProfilePic,ID,setID,about,setAbout}}>
                {children}
        </LoginContext.Provider>
    )

}