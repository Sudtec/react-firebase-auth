import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { setUser } from './redux/actions';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import UserRoute from './components/UserRoute';
import Header from './components/Header';
import AddEdit from './pages/AddEdit'
import About from './pages/About';
import View from './pages/View';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                dispatch(setUser(authUser));
            }
            else {
                dispatch(setUser(null));
            }
        });
    }, [dispatch])
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <ToastContainer position='top-center'/>
                <Routes>
                    <Route exact path='/' element={<UserRoute />}>
                        <Route exact path='/' element={<Home />} />
                    </Route>
                    <Route path="/register" element={<Register />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route exact path='/' element={<UserRoute />}>
                        <Route exact path='/addContact' element={<AddEdit />} />
                    </Route>
                    <Route exact path='/' element={<UserRoute />}>
                        <Route exact path='/update/:id' element={<AddEdit />} />
                    </Route>
                    <Route exact path='/' element={<UserRoute />}>
                        <Route exact path='/view/:id' element={<View />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;