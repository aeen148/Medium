import React, { Component } from 'react';
import { createRef } from 'react';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';


class GetStarted extends Component {
 
    state = {
        eye:true,
        page: 1,
        pastype:'password',
        informationcheck: {
            gmail: ''
        },
        person: {
            firstname: '',
            lastname: '',
            birthdate: '',
            gender: '',
            gmail: '',
            password: '',
            passwordTwo: '',
        },
        errors: {}
    }

    schema1 = yup.object().shape({
        firstname: yup.string().min(4).max(12).required('Firstname is required'),
        lastname: yup.string().min(4).max(12).required('Lastname is required'),
    });

    schema2 = yup.object().shape({
        birthdate: yup.date().min(new Date(1900, 0, 1), 'Birthdate must be after January 1, 1900').max(new Date(), 'Birthdate cannot be in the future').required('Birthdate is required'),
        gender: yup.string().required('Gender is required'),
    });

    schema3 = yup.object().shape({
        gmail: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').max(16, 'Password can be up to 16 characters').required('Password is required'),
        passwordTwo: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
    });

    schema = yup.object().shape({
        firstname: yup.string().min(4).max(12).required('Firstname is required'),
        lastname: yup.string().min(4).max(12).required('Lastname is required'),
        birthdate: yup.date().min(new Date(1900, 0, 1), 'Birthdate must be after January 1, 1900').max(new Date(), 'Birthdate cannot be in the future').required('Birthdate is required'),
        gender: yup.string().required('Gender is required'),
        gmail: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().min(8, 'Password must be at least 8 characters').max(16, 'Password can be up to 16 characters').required('Password is required'),
        passwordTwo: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required(),
    });

    handleSubmit = async (e) => {
        e.preventDefault();
     
        await this.validate();
        if (Object.keys(this.state.errors).length === 0) {
            
            this.nextpage();
        }
        
    
        console.log(this.state.person);
        
    }

    validate = async () => {
        const schema = this.getCurrentSchema();
       
        
        try {
           

            await schema.validate(this.state.person, { abortEarly: false });
                this.setState({ errors: {} });
        } catch (error) {
            const errors = {};
            if (error.inner) {
                error.inner.forEach(err => {
                    errors[err.path] = err.message;
                });
            }
            this.setState({ errors });
            
        }
        if(this.state.errors['birthdate']==='birthdate must be a `date` type, but the final value was: `Invalid Date` (cast from the value `""`).'){
            let er={...this.state.errors};
            er['birthdate']='birthdate is required'
            this.setState({ errors:er});
        }
    }

    getCurrentSchema() {
        switch (this.state.page) {
            case 1:
                return this.schema1;
            case 2:
                return this.schema2;
            case 3:
                return this.schema3;
            default:
                return this.schema;
        }
    }

    handleChange = ({ currentTarget: input }) => {
       
        const person = { ...this.state.person };
        person[input.name] = input.value;
        this.setState({ person });
    }

    stylecalculator(pagenumber) {
        return {
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100%',
        };
    }

    render() {
        return (
            <>
                <div style={{ width: '100vw', height: '100vh', backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '35vw', height: '21vw', position: 'absolute', backgroundColor: 'white', borderRadius: '15px' }}>
                        <form onSubmit={this.handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', height: '100%' }}>
                            <div style={{ display: 'flex', backgroundColor: '#26C281', width: '100%', height: '40px', border: 'solid white 1px', justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{ color: 'white', fontWeight: 'bold' }}>Help us know you better</span>
                            </div>
                            {/* {this.state.errors && Object.keys(this.state.errors).length > 0 && (
                                <div className='alert alert-danger' role='alert' style={{ margin: '10px', width: '100%' }}>
                                    <ul className='mb-0'>
                                        {Object.values(this.state.errors).map((error, index) => (
                                            <li key={index}>{error}</li>
                                        ))}
                                    </ul>
                                </div>
                            )} */}
                            <div style={{ flex: 1, width: '100%' }}>
                                {this.state.page === 1 ? (                                              //PAGE ONE
                                    <div ref={this.inputmove} style={this.stylecalculator(this.state.page)}>
                                        <div className='form-group'>
                                            <label htmlFor='firstname'>Firstname</label>
                                            <input className='form-control' onChange={this.handleChange} name='firstname' id="firstname" />
                                            {this.state.errors.firstname && <div className='text-danger'>{this.state.errors.firstname}</div>}
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor="lastname">Lastname</label>
                                            <input className='form-control' onChange={this.handleChange} name='lastname' id="lastname" type="text" />
                                            {this.state.errors.lastname && <div className='text-danger'>{this.state.errors.lastname}</div>}
                                        </div>
                                    </div>
                                ) : this.state.page === 2 ? (                                           //PAGE TWO
                                    <div style={this.stylecalculator(this.state.page)}>
                                        <div className='form-group'>
                                            <label htmlFor='birthdate'>Birth Date</label>
                                            <input className='form-control' onChange={this.handleChange} name='birthdate' type='date' id="birthdate" />
                                            {this.state.errors.birthdate && <div className='text-danger'>{this.state.errors.birthdate}</div>}
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='gender'>Gender</label>
                                            <select className='form-control' onChange={this.handleChange} name='gender' id='gender'>
                                                <option value="" selected disabled>Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Not">Prefer not to say</option>
                                                <option value='Croissant'>Croissant</option>
                                            </select>
                                            {this.state.errors.gender && <div className='text-danger'>{this.state.errors.gender}</div>}
                                        </div>
                                    </div>
                                ) : (                                                                   //PAGE THREE
                                    <div className='form-group' style={this.stylecalculator(this.state.page)}>

                                        <div style={{position:'absolute ',top:'47%',right:'5%',cursor:'pointer',border:'solid black 1px',padding:'5px 5px'  }}>
                                            <a onClick={this.showPasswordHandler}>{this.state.eye===true ? (<FontAwesomeIcon icon={faEyeSlash} style={{border:'none'}}/>) :(<FontAwesomeIcon icon={faEye} style={{border:'none'}}/>)}</a>
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='gmail'>Gmail</label>
                                            <input type='email' className='form-control' onChange={this.handleChange} name='gmail' id="gmail" />
                                            {this.state.errors.gmail && <div className='text-danger'>{this.state.errors.gmail}</div>}
                                        </div>
                                        <div  className='form-group'>
                                            <label htmlFor='password'>Password</label>
                                            <input className='form-control' onChange={this.handleChange} name='password' id='password' type={this.state.pastype}style={{marginRight:'',maxWidth:''}} />
                                            {this.state.errors.password && <div className='text-danger'>{this.state.errors.password}</div>}
                                            
                                        </div>
                                        
                                        <div  className='form-group'>
                                            <label htmlFor='passwordTwo'>Confirm Password</label>
                                            <input className='form-control' onChange={this.handleChange} name='passwordTwo' id='passwordTwo' type={this.state.pastype} />
                                            {this.state.errors.passwordTwo && <div className='text-danger'>{this.state.errors.passwordTwo}</div>}
                                        </div>
                                        
                                       
                                    </div>
                                )}
                            </div>
                            <div style={{ marginTop: 'auto', padding: '10px' }}>
                                <button type="submit" className='btn btn-success'>
                                    Continue
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }

    nextpage = () => {
        switch (this.state.page) {
            case 1: this.setState({ page: 2 }); break;
            case 2: this.setState({ page: 3 }); break;
           // case 3:axios.post('medium.com/data/members',this.state.person);
            
            
        }
    }
    passwordChecker=(password1,password2)=>{
        if(password1===password2){
            return true;
        }
        else{return false

        }
    }
    showPasswordHandler=()=>{
        console.log('check')
        if(this.state.pastype==='password'){
          
           this.setState({pastype:'text',eye:false});
        }else{
            this.setState({pastype:'password',eye:true});
        }
        

    }
}

export default GetStarted;

