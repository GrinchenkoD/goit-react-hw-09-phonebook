import React,{ lazy, Suspense } from 'react'
import { Redirect, Switch } from 'react-router'
import Loader from '../loader/Loader'
import PrivateRoute from '../PrivateRoute'
import PublicRoute from '../PublicRoute'

const Homepage = lazy(() => import('../../pages/homepage/Homepage' /*webpackChunkName: "home-page" */));
const Register = lazy(() => import('../../pages/register/Register' /*webpackChunkName: "register-page" */));
const Login = lazy(() => import('../../pages/login/Login' /*webpackChunkName: "login-page" */));
const Contacts = lazy(() => import('../../pages/contacts/Contacts' /*webpackChunkName: "contacts-page" */));


const Main = () => {
    return (
        <main className='thumb'>

            <Suspense fallback={<Loader/>}>
                <Switch>
                    <PublicRoute exact path="/" component={Homepage} />
                    <PublicRoute path="/register" component= {Register} redirectTo="/contacts" restricted /> 
                    <PublicRoute path="/login" component={Login} redirectTo="/contacts" restricted />
                    <PrivateRoute path="/contacts" component={Contacts} redirectTo='/login' />
                    <Redirect to="/contacts" />

                    
                </Switch>
            </Suspense>
        </main> 
    )


}

export default Main
