import React , {setState, useState} from 'react';
import './UserProfile.css';
import profile from './man.png';


function UserProfile() {
  /*  const [isShown, setIsShown] = useState(false);*/
    const uploadedImage = React.useRef(null);
   
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
          const reader = new FileReader();
          const {current} = uploadedImage;
          current.file = file;
          reader.onload = (e) => {
              current.src = e.target.result;
          }
          reader.readAsDataURL(file);
        }
    };

 
    return (
        <>
            <div className='UserProfile__section'>
                <div className='UserProfle__wrapper'>
                    <h1 className='UserProfile__heading'>Account Setting</h1>
                    <div className='UserProfile__container'>
                        <div className='UserProfile__container-card'>
                            <div className='UserProfile__container-cardInfo'>
                                <h3>Hello, VIBOLROTTANA SENG</h3>
                                <br></br>
                                <br></br>
                                <div className='Userprofile__upload'>
                                    <img src={profile} ref={uploadedImage} id="photo" />   
                                    <input type="file" id="file" accept="image/*" onChange={handleImageUpload} multiple = "false"/>
                                    <label for="file" id="uploadBtn" >
                                         Choose Photo
                                    </label>
                                </div>
                                <div className='Personal__info'>
                                    <input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name"  />
                                    <input filter="[^a-zA-Z ]" name="lastName" placeholder="Last Name"  />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
       </>
    );
}
export default UserProfile;