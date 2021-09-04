import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Field from '../components/FieldForm';
import { setToken, isAuthenticated } from '../functions/token';
import {fetchAll} from '../functions/api'
import { setUser } from '../functions/user';
import { Redirect } from 'react-router';

const LoginForm = (props) => {

    const [loggedIn, setLoggedIn] = useState(false);
    const isAuth  = isAuthenticated();
        

   
    
    const {control, handleSubmit}  = useForm();
    const set = (token,user) => {setToken(token); setUser(JSON.stringify(user))}
    const onSubmit = (data) => {
        fetchAll(data).then(({token,user}) => {set(token,user)}).then(() => {setLoggedIn(true)}).then(() => props.setUser(localStorage.getItem('user'))) }

        if (isAuth || loggedIn) {
            return <Redirect to="/"/>
           }
        
    return (
        <Container>
            <div>
                <Field control={control} label="username" placeholder="username" type="text" required name="username" />
                <Field control={control} label="password" type="password" required placeholder="*******" name="password"  />
                <div className="d-grid gap-2" >
                    <button  className="btn btn-secondary" onClick={handleSubmit(onSubmit)}>Login</button>
                </div>
            </div>
        </Container>

      );
 }
 

export default LoginForm;
