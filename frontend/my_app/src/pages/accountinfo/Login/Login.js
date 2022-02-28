import React, { useRef, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';


import './../style.css'
import { useDispatch, useSelector } from "react-redux";

import { isEmail } from "validator"

import LoginNav from './LoginNav';
import 'bootstrap'
//import { login } from "../../../redux/actions/Auth";
const required = (value) => {
    if (!value) {
        return (
            <div className='alert alert-danger' role="alert" >
                this field is required
            </div>
        )
    }
}
const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};


const Login = (props) => {

    //const form = useRef();
    //const checkedBtn = useRef();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    // const { isLoggedIn } = useSelector(state => state.auth);
    //const dispatch = useDispatch();

    const onchangeemail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleLogin = (e) => {
        e.preventDefault();

        // setLoading(true);

        // form.current.validateAll();

        // if (checkedBtn.current.context._errors.length === 0) {
        //     dispatch(login(email, password))
        //         .then(() => {
        //            // props.history.push("/customer/accountDetail");
        //             window.location.reload();
        //         })
        //         .catch(() => {
        //             setLoading(false);
        //         });
        // } 
        if (email === "damla@gmail.com" && password === "12345") {
            console.log("çalışıyo işte");
            setLoading(true);

        }


    };

    if (loading === true) {
        return <Redirect push to="/customer" />
    }



    return (<div style={{ display: 'flex', flexDirection: 'column' }}>

        <LoginNav />

        <div className='login-info-mother'>
            <p className='login-info-mother-header'> GİRİŞ</p>
            <form onSubmit={handleLogin} >

                <div className='x1-mother'>
                    <i class="fas fa-envelope-square"></i>
                    <input className='x1' placeholder='email'
                        id='email'
                        name="email"
                        value={email}
                        onChange={onchangeemail}
                        // validations={[required]}
                        type='email'></input></div>
                <Link to='/forgotpassword' style={{ border: 'none' }} className='x1-forgot-password' >şifreni mi unuttun?</Link>
                <div className='x1-mother'>
                    <i class="far fa-lock-alt"></i>
                    <input className='x1'
                        id='password'
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        // validations={[required]}
                        type='password'></input></div>
                <div>

                    <button className='x1-button'
                        type='submit'
                    >
                        {/* {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )} */}
                        giriş yap
                    </button ></div>

            </form>
        </div>

        <div className='login-footer'>
                <div>
                    <p >BİLGİ</p>
                    <Link
                        style={{
                            border: 'none',
                            color: '#c3c3c3'
                        }}
                        className='login-footer1'> Yardım</Link>
                    <p style={{ marginTop: '5px' }}>© 2011 - 2022 ELma Teknoloji AŞ, Tüm Hakları Saklıdır</p>
                </div>
                <div>
                    <p> BİZE ULAŞMAK İÇİN</p>
                    <Link
                        style={{
                            border: 'none',
                            color: '#c3c3c3'
                        }}
                        className='login-footer1'> elma@gmail.com</Link>
                </div>


  </div>




    </div>);

}
export default Login;