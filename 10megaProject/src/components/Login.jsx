import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'
import { Button, Input, Logo } from './index'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState();

    const login = async (data) => {
        // yeha pe error set kar lo or set karne ke liye usko "empty" kar do. agar jo bhi error hai wo state me chala jayega jisko niche handle ka lenge
        setError("");
        try {
            // yeha pe authservice se loging karne jo data milega usko "sessions bolte hai"
            const session = await authService.login(data)
            // yeha cheack karenge ki session pe me data hai ki nhi agar hai to user ka current data nikal lenge 
            if (session) {
                const userData = await authService.getCurrentUser();
                // agar yeha user ka Data milta hai to use distpatch kar denge
                if (userData) dispatch(authLogin(userData)); // yeha pe Login ke jagah pe authLogin esliye likha gya hai ki hmne pahle hi "Login as authLogin me convert kar diye hai"
                //  Now navigate
                navigate("/")
            }
        } catch (error) {
            setError(error.message);

        }
    }
    return (
        
            <div className='flex justify-center items-center w-full'>
                <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-lg p-10 border border-black/10`}>
                    <div className='mb-2 flex justify-center'>
                        <span className='inline-block w-full max-w-[100px]'>
                            <Logo width='100%' />
                        </span>
                    </div>
                    <h2 className='text-2xl text-center font-bold leading-tight'>
                        Sign in to your account
                    </h2>
                    <p className='mt-20 text-black/60 text-center text-base'>
                        Don&apos;t have any account?&nbsp;
                        <Link
                            to="/Signup"
                            className='font-medium text-primart transition-all duration-200 hover:underline'>
                            Signup
                        </Link>
                    </p>
                    {/* if in any situation we have an error then wa display these array */}
                    {error && <p className='mt-8 text-center text-red-700'>{error}</p>}

                    {/* jab hm form me submit karenge to handleSubmit ik even hai na ki wo function h jan bhi functiomn banana ho to esko chor kar denge */}
                    <form onSubmit={handleSubmit(login)} 
                    className='mt-8'>
                        <div className=' space-y-5'>
                            <Input 
                               lable = "Email: "
                               placeholder = "Enter Your Email"
                               type = "email"
                               //agar ye ... nhi denge to jaha bhi ragister ka value hoga sare override ho jayega and esko unique banane ke liye ik value pass kar denge 
                               // ragister me ik dusri valuye hoti hai object jisme hm option pass karte hai
                               {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || 
                                     "Email Address must be a valid address",
                                }
                               })} 
                            
                            />
                            <Input 
                                lable = "Password"
                                type = "password"
                                placeholder = "Enter your password"
                                {...register("password",{
                                    required : true
                                })}
                            />
                            <Button 
                                type='submit' 
                                className='w-full'>
                                    Sign in
                            </Button>
                        </div>

                    </form>
                </div>
            </div>
            
            



    )
}

export default Login
