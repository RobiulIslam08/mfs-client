import { FaUser } from "react-icons/fa";
import MenuItem from "../../Component/MenuItem/MenuItem";


const AdminMenu = () => {
	return (
		<div>
			<MenuItem icon={FaUser} label='My Profile' address='my-profile'></MenuItem>
			<MenuItem icon={FaUser} label='User Management' address='user-management'></MenuItem>
			<MenuItem icon={FaUser} label='System Monitoring' address='system-monitoring'></MenuItem>
		</div>
	);
};

export default AdminMenu;