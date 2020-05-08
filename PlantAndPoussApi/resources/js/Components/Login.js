import React from "react";
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider } from '@material-ui/core/styles';

// Actions
import { userLoginFetch } from '../Actions/UserActions';

class Login extends React.Component {

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
                <MuiThemeProvider>
                    <div>
                        <TextField
                            label="Email"
                            onChange={(event, newValue) => this.setState({ email: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            label="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <Alert severity="error">This is an error alert — check it out!</Alert>
                        <Button label="Submit" primary={true} style={style} onClick={(event) => this.props.userLoginFetch(this.state)}>
                            Submit
                        </Button>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);