import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeScreen from "./Screens/HomeScreen";
import Register from "./Components/Register";
import { connect } from "react-redux";
import { userLoginFetch } from "./Actions/UserActions";
import Login from "./Components/Login";
import './Styles/App.css';

function App() {

    return (
        <Router>
            <div>
                <AppBar title="Plant and Pouss" position="static">
                    <Toolbar>
                        <Link exact to="/" className="title">
                            <Button color="inherit" >
                                <Typography variant="h6">
                                    Plant and Pouss
                                </Typography>
                            </Button>
                        </Link>

                        <div className="buttonContainer">
                            <Link to="/register" className="nav-link" >
                                <Button color="inherit" >
                                    Register
                                </Button>
                            </Link>
                            <Link to="/login" className="nav-link" >
                                <Button color="inherit" >
                                    Login
                                </Button>
                            </Link>
                        </div>
                    </Toolbar>
                </AppBar>

                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;