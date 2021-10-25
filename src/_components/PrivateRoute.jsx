import React from 'react'
import { Route , Redirect } from 'react-router-dom'

export const PrivateRoute = ({component : Component,...rest}) =>{
    return localStorage.getItem('user') ? <Route {...rest} component={Component}/> : <Redirect to="/login" />
}
