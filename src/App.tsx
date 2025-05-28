import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "~/stores/visualizerStore"
import { AuthProvider } from "~/context/AuthContext" // ✅

import Login from "./components/Login"
import SignUp from "./components/Signup"
import Visualizer from "~/pages/Visualizer/Visualizer"
import { BackgroundBeamsWithCollision } from "./components/HeroSection"

function App() {
    return (
        <Provider store={store}>
            <AuthProvider>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/visualizer" element={<Visualizer />} />
                </Routes>
            </AuthProvider>
        </Provider>
    )
}

export default App
