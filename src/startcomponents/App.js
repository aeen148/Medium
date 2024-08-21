import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './menue';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './signin';
import GetStarted from './getstarted';
import OurStory from './ourStory';
import Memberships from './membership';
import Write from './write';
import Main from './main';

class App extends Component {
    state = {
        loggedin: false,
        person: {
            name: '',
            lastname: '',
            age: '',
            gmail: '',
            password: '',
        }
    };

    setLoggedin = (login) => {
        this.setState({ loggedin: login });
    }

    loggedCheck = () => {
        if (this.state.loggedin) {
            return <Main loggedin={this.state.loggedin} />;
        }
        return <Menu loggedin={this.state.loggedin} />;
    }

    render() {
        return (
            <div>
                <Routes>
                    <Route path='/OurStory' element={<OurStory />} />
                    <Route path='/Memberships' element={<Memberships />} />
                    <Route path='/Write' element={<Write />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route
                        path='/GetStarted'
                        element={
                            <GetStarted
                                loggedin={this.state.loggedin}
                                setLoggedin={this.setLoggedin}
                                person={this.state.person}
                            />
                        }
                    />
                    <Route path='/' element={this.loggedCheck()} />
                    <Route path='*' element={<Navigate to='/' />} />
                </Routes>
            </div>
        );
    }
    
}

export default App;


