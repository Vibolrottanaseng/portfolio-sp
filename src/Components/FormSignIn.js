import React,{useContext} from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { AuthContext } from '../contexts/AuthContext';
import firebaseConfig from '../firebase'
import { Redirect } from 'react-router'
import './Form.css';




const SignIn=()=>{

    

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#2CE080'}
    const btnstyle={margin:'8px 0',backgroundColor:'#2CE080',color:'black'}
    const link = {color:'#2CE080'}


    
  
    const handleLogin = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
       
        try {

            firebaseConfig.auth().signInWithEmailAndPassword(email.value, password.value);
        
        } catch(error) {
            alert(error);
        }
    }

    const { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return <Redirect to="/products" />;
    }

   

   

    
    return(
        <Grid>
            
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleLogin}>
            
                <div className="form-label">
                  <TextField 
                    required id="standard-required" 
                    className="form-control"
                    placeholder='Enter Username' 
                    label="Username" 
                    name="email" 
                    type='email' 
                    placeholder='Enter username' 
                    fullWidth required
                  />
                  <TextField required id="standard-required" className="form-control" placeholder='Enter password' label="Password" name="password" type='password' fullWidth required/>
                </div>
                  
                <FormControlLabel
                    control={
                    <Checkbox name="checkedB" style={link}
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>  Sign in</Button>
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                
                <Typography >
                     <Link href="/forgot-password" style={link}>
                        Forgot password ?
                    </Link>
                </Typography>
            
                <span >
                   Not yet have an account? <a href='/sign-up' style={link}>here</a>            
                </span>
                </form>
            </Paper>
            
        </Grid>
    )
}

export default SignIn;