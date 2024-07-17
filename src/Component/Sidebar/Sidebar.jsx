import { GrLogout } from "react-icons/gr";

// import useAuth from "../Pages/hooks/useAuth";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import useRole from "../Pages/hooks/useRole";
import AdminMenu from "../../Menu/AdminMenu/AdminMenu";
import AgetnMenu from "../../Menu/AgentMenu/AgetnMenu";
import UserMenu from "../../Menu/UserMenu/UserMenu";
import useUser from "../../hooks/useUser";
import { toast } from "react-toastify";



const Sidebar = () => {
	
	const user = useUser()

	const [isActive, setActive] = useState(false)
	const navigate = useNavigate()
	const handleLogout = () => {
		// Remove token from local storage
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		toast("Successful logout");
		navigate('/');
	};
	
	
	return (
		<div className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
			}  md:translate-x-0  transition duration-200 ease-in-out`}>
			<div>
				{/* <AdminMenu></AdminMenu> */}
				{/* <TourGuideMenu></TourGuideMenu> */}
			
				{user?.role === 'Admin' && <AdminMenu></AdminMenu>}
			{user?.role === 'Agent' && <AgetnMenu></AgetnMenu>}
			{user?.role === 'User' && <UserMenu></UserMenu>}
			</div>
			<div>
				{/* <Link to='/'><button

					className='flex w-full items-center px-4 py-2 mt-5 text-gray-900 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
				>
					<HiOutlineLogin className='w-5 h-5' />

					<span className='mx-4 font-medium'>Home</span>
				</button></Link> */}

				<button
					onClick={handleLogout}
					className='flex w-full items-center px-4 py-2 mt-5 text-gray-900 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
				>
					<GrLogout className='w-5 h-5' />

					<span className='mx-4 font-medium'>Logout</span>
				</button>

			</div>
		</div>
	);
};

export default Sidebar;