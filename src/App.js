import React from 'react';
import './App.css';
import Home from './Components/Pages/Homepage/Home';
import Services from './Components/Pages/Services/Services';
// import Products from './Components/Pages/Products/Products';
import SignUp from './Components/Pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Pages/Footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
import Login from './Components/Pages/SignIn/SignIn';
/*import Form from './Components/Form';*/

/*import Pro from './Components/ProTemp/Pro1';
import Creative from './Components/CreativeTemp/creative';
import Simple from './Components/SimpleTemp/simple';*/



function App() {
    return (
        <AuthProvider>
            <Router>

                <Navbar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/services' component={Services} />
                    {/* <Route path='/products' component={Products} /> */}
                    <Route path='/sign-up' component={SignUp} />
                    <Route path='/sign-in' component={Login} />
                    {/*  <Route path='/pro1' component={Pro} />
                <Route path='/creative' component={Creative} />
                <Route path='/simple' component={Simple} />
    */}


                </Switch>
                <Footer />
            </Router>
        </AuthProvider>
    );
}

export default App;