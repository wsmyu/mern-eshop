import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useLocation ,useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Store} from '../Store';
import { toast } from 'react-toastify';
import getError from '../util';


const SigninPage = () => {
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/';
    const {state,dispatch:ctxDispatch} = useContext(Store)
  
    const {userInfo} = state;

    const submitHandler = async(e)=>{
        e.preventDefault();
        try{
            const {data} = await axios.post('/api/users/signin',{
                email,
                password,
            });
            ctxDispatch({type:'USER_SIGNIN', payload:data})
            localStorage.setItem('userInfo',JSON.stringify(data));
            navigate(redirect || '/');
        }catch (err){
            toast.error(getError(err))
        }
    }

    useEffect(()=>{
        if(userInfo){
            navigate(redirect);
        }
    },[navigate,redirect,userInfo])

    return (
    <div>
        <Container className='small-container'>
            <Helmet>
                <title>Sign In</title>
            </Helmet>
            <h1 className='my-3'>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='mb-3' controlId='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' onChange={(e)=>setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group className='mb-3' onChange={(e)=>setPassword(e.target.value)} controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' required/>
                </Form.Group>
                <div className='mb-3'>
                    <Button type='submit'>Sign In</Button>
                </div>
                <div className='mb-3'>
                    New Customer? {' '}
                    <Link to={`/signup?redirect=${redirect}`}>Create your account</Link>
                </div>
            </Form>
        </Container>
      
    </div>
  )
}

export default SigninPage
