import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { fbSignInInitiate, googleSignInInitiate } from '../redux/actions';
import { loginInitiate } from '../redux/actions';
import './login.css'
const Login = () => {
    const [state, setState] = useState({
        email: '',
        password: '',
    })
    const { email, password } = state;

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

        if (!email || !password) {
            return;
        }
        dispatch(loginInitiate(email, password));
        setState({ email: '', password: '' });

    }
    const handleGoogleSignIn = () => {
        dispatch(googleSignInInitiate())
    }
    const handleFBSignIn = () => {
        dispatch(fbSignInInitiate())
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }


    return (
        <div>
            <div id="logreg-forms" className='text-center'>
                <form className="form-signin" onSubmit={handleSubmit}>
                    <h1 className="h3 mb-3 font-weight-normal" style={{ textAlign: 'center' }}> Sign in</h1>
                    <div className="social-login">
                        <button className="btn google-btn social-btn" type='button' onClick={handleGoogleSignIn}>
                            <span>
                                <i className="fab fa-google-plus-g"></i>Sign in with Google+
                            </span>
                        </button>

                        <button className="btn facebook-btn social-btn" type='button' onClick={handleFBSignIn}>
                            <span>
                                <i className="fab fa-facebook-f"></i>Sign in with Facebook
                            </span>
                        </button>
                    </div>
                    <p style={{ textAlign: 'center' }}>
                        OR
                    </p>
                    <input type="email"
                        name='email'
                        placeholder='Email Address'
                        className='form-control'
                        id='inputEmail'
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
                    <button className="btn btn-secondary btn-block text-center" type='submit'>
                        <i className="fas fa-sign-in-alt"></i> Sign In
                    </button>
                    <hr />
                    <p>Don't have an account??</p>

                    <Link to='/register'>
                        <button className="btn btn-primary btn-block" type='button' id='btn-signup'>
                            <i className="fas fa-user-plus"></i> Sign up New Account
                        </button>
                    </Link>
                </form>
            </div>
        </div>

    )
}

export default Login 