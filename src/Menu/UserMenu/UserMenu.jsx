import { Link } from "react-router-dom";
import Button from "../../Component/Button/Button";
import Profile from "../../Component/Profile/Profile";
import MenuItem from "../../Component/MenuItem/MenuItem";
import { FaUser } from "react-icons/fa";

const UserMenu = () => {
	return (
		<div>
			<MenuItem icon={FaUser} label='My Profile' address='my-profile'></MenuItem>
			<MenuItem icon={FaUser} label='Send Money' address='send-money'></MenuItem>
			<MenuItem icon={FaUser} label='Cash Out' address='cash-out'></MenuItem>
			
		</div>
	);
};

export default UserMenu;