import React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Logo from '../components/Logo'

function Login() {
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
            className='font-medium text-primart transition-all duration-200 hover:underline'
          >
            Signup
          </Link>
        </p>
        {error && <p className='mt-8 text-center text-red-700'>{error}</p>}

        {/* form */}
        <form onSubmit={handleSubmit(Login)}
        className='mt-8'>
          <div className=' space-y-5'>
            <Input
              lable = 'Email: '
              placeholder = 'Enter Your Email'
              type = 'email'
              // yeha function likhna hai vaidation ka
            />
            <Input
              lable = 'Password'
              placeholder = 'Enter your password'
              type = 'password'
              // yeha function likhna hai vaidation ka
            />
            <Button 
              className='w-full'
              type='submit'
            >
              Sign in
            </Button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default Login
