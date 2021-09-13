import React , {useState} from 'react';
import './UserProfile.css';
import profile from './man.png';

function UserProfile() {
    // const imgDiv = document.querySelector('.UserProfile__upload');
    // const img = document.querySelector('#photo');
    // const file = document.querySelector('#file');
    // const uploadBtn = document.querySelector('#uploadBtn');

    // imgDiv.addEventListener('mouseenter', function(){
    //     uploadBtn.style.display = "block";
    // });

    // imgDiv.addEventListener('mouseleave', function(){
    //     uploadBtn.style.display = "none";
    // });

    // file.addEventListener('change', function(){
    //     //this refers to file
    //     const choosedFile = this.files[0];
    
    //     if (choosedFile) {
    
    //         const reader = new FileReader(); //FileReader is a predefined function of JS
    
    //         reader.addEventListener('load', function(){
    //             img.setAttribute('src', reader.result);
    //         });
    
    //         reader.readAsDataURL(choosedFile);
    
    //         //Allright is done
    
    //         //please like the video
    //         //comment if have any issue related to vide & also rate my work in comment section
    
    //         //And aslo please subscribe for more tutorial like this
    
    //         //thanks for watching
    //     }
    // });
            
    return (
        <>
            <div className='UserProfile__section'>
                <div className='UserProfle__wrapper'>
                    <h1 className='UserProfile__heading'>Account Setting</h1>
                    <div className='UserProfile__container'>
                        <div className='UserProfile__container-card'>
                            <div className='UserProfile__container-cardInfo'>
                                
                            <div className='Userprofile__upload'>
                                <img src={profile} id="photo"  />   
                                <input type="file" id="file"/>
                                <label for="file" id="uploadBtn">Choose Photo</label>
                                    
                                   
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