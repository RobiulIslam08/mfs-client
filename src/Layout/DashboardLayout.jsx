import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import useAuth from "../Pages/hooks/useAuth";
import Sidebar from "../Component/Sidebar/Sidebar";



const DashboardLayout = () => {
	// const {loading} = useAuth()
	// if(loading) {
	// 	return <>
	// 	<div className="flex justify-center items-center h-screen">
	// 	<span className="loading text-fuchsia-800  loading-bars loading-lg"></span>
	// 	</div>
	// 	</>
	// }
	return (
		<div className="relative md:flex justify-evenly min-h-screen bg-gray-800">
			{/* sidebar */}
			<div className="w-64 min-h-screen bg-pink-400">
				<Sidebar></Sidebar>
			</div>

			{/* dynamic content for outlet */}
			<div className="flex-1">
				<div className="p-5"> 
				<ToastContainer></ToastContainer>
				<Outlet></Outlet>
				</div>
			
			</div>
		</div>
	);
};

export default DashboardLayout;