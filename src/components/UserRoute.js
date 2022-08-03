import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import LoadingToRedirect from './LoadingToRedirect';

const UserRoute = () => {
    const { currentUser } = useSelector((state) => state.user);

    return currentUser ? <Outlet /> : <LoadingToRedirect />
}

export default UserRoute