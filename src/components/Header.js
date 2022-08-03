import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutInitiate } from '../redux/actions';
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    const [activeTab, setActiveTab] = useState('Home');
    const { currentUser: user } = useSelector((state) => (
        {
            ...state.user
        }
    ))

    const handleAuth = () => {
        dispatch(logoutInitiate())
    }
    useEffect(()=>{
        if(location.pathname === '/'){
            setActiveTab('Home')
        }
        else if(location.pathname === '/addContact'){
            setActiveTab('AddContact')
        }else if(location.pathname === '/about'){
            setActiveTab('About')
        }else if(location.pathname === '/login'){
            setActiveTab('Signin')
        }
    }, [location])
    return (
        <div className='header'>
            <Link to='/'>
                <label className="logo">Contact App</label>
            </Link>

            <div className="header-right">
                <Link to='/'>
                    <label
                        className={`${activeTab === 'Home' ? 'active' : ''}`}
                        onClick={() => setActiveTab('Home')}
                    >
                        Home
                    </label>
                </Link>
                <Link to='/addContact'>
                    <label
                        className={`${activeTab === 'AddContact' ? 'active' : ''}`}
                        onClick={() => setActiveTab('AddContact')}
                    >
                        Add Contact
                    </label>
                </Link>
                <Link to='/about'>
                    <label
                        className={`${activeTab === 'About' ? 'active' : ''}`}
                        onClick={() => setActiveTab('About')}
                    >
                        About
                    </label>
                </Link>
                {
                    user ? (
                        <Link to='/'>
                            <label
                                style={{ cursor: 'pointer' }}
                                onClick={handleAuth}
                            >
                                Sign Out
                            </label>
                        </Link>
                    )
                        :
                        (
                            <Link to='/login'>
                                <label
                                    className={`${activeTab === 'Signin' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('Signin')}
                                >
                                    Sign In
                                </label>
                            </Link>
                        )
                }
            </div>
        </div>
    )
}

export default Header