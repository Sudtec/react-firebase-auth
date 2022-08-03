import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerInitiate } from '../redux/actions';
import './Register.css'
const Register = () => {
    const [state, setState] = useState({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })
    const { displayName, email, password, passwordConfirm } = state;

    const dispatch = useDispatch();

    const { currentUser } = useSelector((state) => state.user);

    const navigate = useNavigate();


    useEffect(() => {
        console.log(currentUser)
        if (currentUser) {
            navigate('/');
        }
    }, [currentUser, navigate]);


    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName));
        setState({ displayName: '', email: '', password: '', passwordConfirm: '' });
    }

    const handleChange = (e) => {
        console.log(e.target)
        const { name, value } = e.target;

        setState({ ...state, [name]: value })
    }


    return (
        <div>
            <div id="register-form">
                <form className="form-signup" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}> Sign up</h1>

                    <input type="text"
                        name='displayName'
                        placeholder='Full Name'
                        className='form-control'
                        id='displayName'
                        required
                        onChange={handleChange}
                        value={displayName}
                    />
                    <input type="email"
                        name='email'
                        placeholder='Email Address'
                        className='form-control'
                        id='user-email'
                        required
                        onChange={handleChange}
                        value={email}
                    />
                    <input type="password"
                        name='password'
                        placeholder='Password'
                        className='form-control'
                        id='inputPassowrd'
                        required
                        onChange={handleChange}
                        value={password}
                    />
                    <input type="password"
                        name='passwordConfirm'
                        placeholder='Repeat Password'
                        className='form-control'
                        id='passwordConfirm'
                        required
                        onChange={handleChange}
                        value={passwordConfirm}
                    />
                    <button className="btn btn-primary btn-block" type='submit'>
                        <i className="fas fa-user-plus"></i> Sign Up
                    </button>


                    <Link to='/login'>

                        <i className="fas fa-angle-left"></i> Back

                    </Link>
                </form>
                <br />
            </div>
        </div>

    )
}

export default Register 