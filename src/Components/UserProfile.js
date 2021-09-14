import React , {setState, useState} from 'react';
import './UserProfile.css';
import profile from './man.png';

function UserProfile() {
    const [isShown, setIsShown] = useState(false);
    
   
    return (
        <>
            <div className='UserProfile__section'>
                <div className='UserProfle__wrapper'>
                    <h1 className='UserProfile__heading'>Account Setting</h1>
                    <div className='UserProfile__container'>
                        <div className='UserProfile__container-card'>
                            <div className='UserProfile__container-cardInfo'>
                                
                                <div className='Userprofile__upload'>
                                <img src={profile} id="photo" />   
                                <input type="file" id="file"/>
                                <label for="file" id="uploadBtn" 
                                     onMouseEnter={() => setIsShown(true)}
                                     onMouseLeave={() => setIsShown(false)}>
                                         Choose Photo
                                </label>
                        
                                
                                    
                                   
                            </div>
                               

                                <h3>Hello, VIBOLROTTANA SENG</h3>
                                <br></br>
                               
                                <br></br>
                               
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
       </>
    );
}
export default UserProfile;