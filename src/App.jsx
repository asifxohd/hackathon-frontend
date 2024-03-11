
import { createContext, useState } from "react";
import Landing from "./pages/landing/landing"
import LoginForm from "./pages/login/login"
import OtpForm from "./pages/otp/otp"
import Register from "./pages/register/register"
import Community from "./pages/story/Community"
import Hamberger from "./components/Hamberger/Hamberger";
import StoriesPage from "./pages/story/Stories";
import Abuse from "./pages/abuse/abuse";
import Help from "./pages/help/help";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Complaint from "./pages/complaint/complaint";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useSelector } from "react-redux";


const MyContext = createContext();


function App() {

	const [open, setOpen] = useState(false);
	const { user } = useSelector((state) => state.user);

	return (
		<>

			<ToastContainer />
			<MyContext.Provider value={{ open, setOpen }}>
				<div className="relative">
					<Hamberger prop={{ open, setOpen }} />


					<BrowserRouter>
						<Routes>
							<Route path="/login" element={(!open) && <LoginForm />} />
							<Route path="/register" element={(!open)&& <Register />} />
							<Route path="/otp" element={(!open) && <OtpForm />} />
							<Route path="/help" element={(!open) && <Help />} />
							<Route path="/stories" element={((!open) && <StoriesPage />)} />
							<Route path="/community" element={((!open) && <Community />)} />
							<Route exact path="/" element={((!open) && <Landing />)} />
							<Route exact path="/abuse" element={(!open) && <Abuse />} />
							<Route  path="/consult" element={(!open) && <Complaint/>} />


						</Routes>
					</BrowserRouter>
				</div>
			</MyContext.Provider>

		</>
	)
}

export { MyContext };
export default App
