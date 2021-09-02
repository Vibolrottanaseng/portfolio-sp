import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



const SignIn=()=>{

    

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#2CE080'}
    const btnstyle={margin:'8px 0',backgroundColor:'#2CE080',color:'black'}
    const link = {color:'#2CE080'}
    
    
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <div className="TextFieldContainer">
                  <TextField required id="standard-required" placeholder='Enter Username' label="Username" placeholder='Enter username' fullWidth required/>
                  <TextField required id="standard-required"  placeholder='Enter password' label="Password" type='password' fullWidth required/>
                </div>
                  
                <FormControlLabel
                    control={
                    <Checkbox name="checkedB" style={link}
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="/forgotpassword" style={link}>
                        Forgot password ?
                    </Link>
                </Typography>
            
                <span >
                   Not yet have an account? <a href='/sing-in' style={link}>here</a>            
                </span>
               
            </Paper>
        </Grid>
    )
}

export default SignIn