import { Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import useAuth from "../Pages/hooks/useAuth";
import Sidebar from "../Component/Sidebar/Sidebar";
import { useEffect } from "react";



const DashboardLayout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		// Check if token exists in local storage
		const token = localStorage.getItem('token');
		if (!token) {
			// If no token, redirect to registration page
			navigate('/');
		}
	}, [navigate]);
	
	return (
		<div className="relative md:flex justify-evenly min-h-screen bg-gray-800">
			{/* sidebar */}
			
			<div className="w-64 min-h-screen bg-pink-400">
				<Sidebar></Sidebar>
			</div>

			{/* dynamic content for outlet */}
			<div className="flex-1">
				<ToastContainer></ToastContainer>
				<div className="p-5"> 
				<Outlet></Outlet>
				</div>
			
			</div>
		</div>
	);
};

export default DashboardLayout;