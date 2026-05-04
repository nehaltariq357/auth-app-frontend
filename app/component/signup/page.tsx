"use client"
import { useState } from "react"
import { useRouter } from "next/navigation";
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
export default function Signup() {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        console.log({ email, password })
        try{
            // send email and password to backend for signup
            const respone = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            })
            const data = await respone.json()
            console.log(data)
            if (respone.ok) {
                console.log("Signup success", data);
            } else {
              
                console.log("Signup failed", data.message);
                
            }

            // redirect after signup
            router.push("/component/login")
            setEmail("")
            setPassword("")
        }catch(error){
            console.log("Error:",error)
        }
    }
  return(
    <form onSubmit={handleSubmit}>
          <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 overflow-hidden relative">
            
            {/* Background Decorative Blobs */}
            <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-900/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[350px] h-[350px] bg-blue-900/20 rounded-full blur-[120px]" />
      
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
              
              {/* Left Side: Hero Text */}
              <div className="hidden lg:flex flex-col space-y-6">
                <h1 className="text-6xl font-bold tracking-tight">
                  Roll the Carpet.!
                </h1>
                <div className="pt-4">
                  <button className="border-2 border-white px-8 py-3 text-xl font-medium hover:bg-white hover:text-black transition-all italic">
                    Skip the lag ?
                  </button>
                </div>
                <div className="w-full border-b border-dashed border-gray-700 pt-8" />
              </div>
      
              {/* Right Side: Login Card */}
              <div className="flex justify-center lg:justify-end relative">
                {/* Glowing Circle behind the card */}
                <div className="absolute -top-16 -left-16 w-48 h-48 rounded-full border-2 border-blue-500/50 bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-sm" />
          
                <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl">
                  <div className="mb-8">
                    <h2 className="text-3xl font-semibold">Sign Up</h2>
                    <p className="text-gray-400 text-sm mt-1">Just some details to get you in.!</p>
                  </div>
      
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <input 
                        type="email" 
                        placeholder="Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors"
                      />
                    </div>
      
                    <div className="space-y-2 relative">
                      <input 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500 transition-colors"
                      />
                      <span className="absolute right-4 top-3.5 text-gray-500 cursor-pointer text-xs">👁️</span>
                    </div>
      
                    <button 
                    type="submit"
                    className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20">
                      Sign Up
                    </button>
                  </div>
      
                  <div className="relative my-8">
                    <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-800"></span></div>
                    <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#121212] px-2 text-gray-500">Or</span></div>
                  </div>
      
                  <div className="flex justify-center space-x-6 mb-8">
                    <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                      <FcGoogle  className="w-6 h-6 text-red-500" />
                    </button>
                    <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                      <FaFacebook  className="w-6 h-6 text-blue-600" />
                    </button>
                    <button className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                      <AiFillGithub  className="w-6 h-6 text-white" />
                    </button>
                  </div>
      
                  <div className="text-center text-xs text-gray-400 space-y-4">
                    <p>Already have an account? <span className="text-white cursor-pointer hover:underline"><span 
                    onClick={() => router.push('/component/login')}
                    >Sign In</span></span></p>
                    <div className="flex justify-center space-x-4">
                      <span className="cursor-pointer hover:text-white">Terms & Conditions</span>
                      <span className="cursor-pointer hover:text-white">Support</span>
                      <span className="cursor-pointer hover:text-white">Customer Care</span>
                    </div>
                  </div>
                </div>
      
                {/* Small decorative glow bottom right */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -z-10" />
              </div>
            </div>
          </div>
          </form>
)
}