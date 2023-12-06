import "./Setting.css";
import About from "../../Components/About/About";
import { useLogin } from "../Login/LoginContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const url = 'https://api.cloudinary.com/v1_1/doeykzpxv/image/upload';
  const preset = 'te8sgyea';
  const navigate=useNavigate();
  const {profilePic,setProfilePic,username,setUsername,email,setEmail,ID,setID,convertbase64,about,setAbout}=useLogin();
  const [image,setImage]=useState(profilePic)
  const [showConfirm, setShowConfirm] = useState(false);
  const [abouttext,setAbouttext]=useState("");
  
  
  const handleUpdate=async(e)=>{
    e.preventDefault();
    try{
      setProfilePic(image);
      setAbout(abouttext)

      const formData=new FormData();
      formData.append('file',image);
      formData.append('upload_preset', preset);
      const response = await axios.post(url, formData);
      const imageUrl = response.data.secure_url;

      try{
        const res= await axios.put(`http://localhost:5000/api/auth/update/${ID}`,{email,username,profilePic:imageUrl,about});
        console.log("done")
        navigate('/dashboard')
      }
      catch(error)
      {
        console.error('Error uploading image:', error);
      }


    }
    catch(error)
    {
      console.error('Error uploading image:', error);
    }
  }
  const handlefileupload=async(e)=>{
    setImage(e.target.files[0]);
  
}

const handleDeleteConfirm=async(e)=>{
  e.preventDefault();
  
try{
  setTimeout(() => {
    window.location.replace('/login');
  }, 500);
  const res=await axios.delete(`http://localhost:5000/api/auth/${ID}`);
  
}
catch(err)
{
  console.log(err)
}

}

const handleDelete=async(e)=>{
  e.preventDefault();
  setShowConfirm(true)

 
}

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete"onClick={handleDelete}>Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={image ? image:"https://wallpaperaccess.com/full/170249.jpg"}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput" 
              onChange={handlefileupload}
            />
          </div>
          <label>Username</label>
          <input type="text"  name="name" value={username} onChange={(e)=>{
            setUsername(e.target.value)
          }}/>
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" 
          
          
          value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}

          />
           <label>About Me</label>
          <textarea type="text"  name="name" rows="1" cols="1" value={abouttext}
      
         onChange={(e)=>{
            setAbouttext(e.target.value)
          }}/>
          <button className="settingsSubmitButton" type="submit" onClick={handleUpdate}>
            Update
          </button>
        </form>
      </div>
      <About />

      {showConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-box">
            <p>Are you sure you want to Delete Acount?</p>
            <div className="confirm-buttons">
              <button className="confirm confirm-button" onClick={handleDeleteConfirm}>
                Confirm
              </button>
              <button className="cancel" onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>



  );
}