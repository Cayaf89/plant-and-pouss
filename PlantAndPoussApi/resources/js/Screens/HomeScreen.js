import React from "react";
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from '@material-ui/core/styles';

// Actions
import { userLoginFetch } from '../Actions/UserActions';

class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    render() {
        return (
            <div>
                Home
            </div>
        );
    }
}

export default HomeScreen;