import Image from 'next/image'
import img1 from './aaaaaaa.png'
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <head>
        <title>next JS website</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shodow-2xl flex w-2/3 max-w-4xl text-black">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-blue-900">company</span>Name
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-900 mb-2">
                Sign in to Account
              </h2>
              <div className="border-2 w-10 border-blue-900 inline-block mb-2"></div>
              <div className="flex justify-center ny">
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 nx1">
                  <FaFacebookF className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 nx1">
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a href="#" className="border-2 border-gray-200 rounded-full p-3 nx1">
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-500 my-3">or use your email account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input type="email" name="email" placeholder="Email" className="bg-gray-100 outline-none text-sm
                 flex-1"/>
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input type="password" name="password" placeholder="Password" className="bg-gray-100 outline-none text-sm
                 flex-1"/>
                </div>
                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center text-xs"><input type="checkbox" name="remember"
                    className="mr-1" /> Rememeber me </label>
                  <a href="#" className="text-xs">Forgot Password ?</a>
                </div>
                <a href="#" className="border-2 border-blue-900 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 m-2 mb-5
               hover:text-white">Sign in</a>
                <div className="border-2 w-20 border-blue-900 inline-block mb-2"></div>
                <a href="#" className="border-2 border-blue-900 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-900 m-2
               hover:text-white">Sign up</a>

              </div>
            </div>
          </div>
          <div className="w-2/5 bg-blue-900 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-1">Hello, Friends </h2>
            {/* <div className="border-2 w-10 border-white inline-block mb-2"></div> */}
            <p className="mb-10">
              Fill up the personal information and start journey with us
            </p>
            <img className=" " src={img1.src}></img>
          </div>

        </div>
      </main >
    </div >
  );
}
