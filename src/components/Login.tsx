import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import { useAuth } from "~/context/AuthContext"
import { BackgroundBeamsWithCollision } from "./HeroSection"
import { Boxes } from "./background-boxes"

const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        const isValid = login(email, password)
        if (isValid) {
            navigate("/visualizer")
        } else {
            alert("Invalid credentials")
        }
    }

    return (
        <>
            <BackgroundBeamsWithCollision>
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    See the code, feel the logic—visualize the magic!
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span>Algorithmic Visualizer</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                            <span>Algorithmic Visualizer</span>
                        </div>
                    </div>
                </h2>
                <Boxes />
            </BackgroundBeamsWithCollision>

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
                        Login
                    </h2>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                    <p className="mt-4 text-center text-gray-600">
                        Don’t have an account?{" "}
                        <Link
                            to="/signup"
                            className="text-blue-500 hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
