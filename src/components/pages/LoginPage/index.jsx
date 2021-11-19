import { useState } from "react";
import { useForm } from "react-hook-form"; //install
import { Button } from "../../button";
import './styles.css';

export const LoginPage = () => {
    const [mode, setMode] = useState("login");

    const {register, handleSubmit} = useForm();

    const loginUser = (formVals) => {
        console.log("Login", formVals)
    }

    const signUpUser = (formVals) => {
        console.log("Sign Up", formVals)
    }

    return (
        <div className="pets-page">
            { mode === "login" && (
                    <form className="form-layout" onSubmit={handleSubmit(loginUser)}>
                        <h2>Welcome back, please log in!</h2>
                        <br/>
                        <label htmlFor="user">Email</label>
                        <input type="email" required name="user" {...register('user')}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" required name="password" {...register('password')}/>

                        <input type="submit" value="Login"/>
                        <br/>
                        <p>Don't have an account? Create a new account now!</p>
                        <button onClick={()=> setMode("signup")}>Sign Up</button>
                    </form>
                )
            }

            { mode === "signup" && (
                    <form className="form-layout" onSubmit={handleSubmit(signUpUser)}>
                        <h2>Welcome! Please create an account to continue.</h2>
                        <br/>
                        <label htmlFor="user">Email</label>
                        <input type="email" required name="user" {...register('user')}/>

                        <label htmlFor="password">Password</label>
                        <input type="password" required name="password" {...register('password')}/>

                        <label htmlFor="passwordConfirm">Confirm Password</label>
                        <input type="password" required name="passwordConfirm" {...register('passwordConfirm')}/>

                        <input type="submit" value="Sign Up"/>
                        <br/>
                        <p>Already have an account?</p>
                        <button onClick={()=> setMode("login")}>Login</button>
                    </form>
                )
            }
        </div>
    )
}