import { FaUser } from "react-icons/fa";
import MenuItem from "../../Component/MenuItem/MenuItem";


const AgetnMenu = () => {
	return (
		<div>
			<MenuItem icon={FaUser} label='My Profile' address='my-profile'></MenuItem>
			<MenuItem icon={FaUser} label='Transaction Management' address='transection-management'></MenuItem>
			<MenuItem icon={FaUser} label='Balance Inquiry' address='balance-inquiry'></MenuItem>
			<MenuItem icon={FaUser} label='Transactions History' address='transaction-history'></MenuItem>
		</div>
	);
};

export default AgetnMenu;