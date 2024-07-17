import { createBrowserRouter } from "react-router-dom";
import Register from "../Component/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import LoginPage from "../Component/LoginPage/LoginPage";
import Profile from "../Component/Profile/Profile";
import Sendmoney from "../Component/Sendmoney/Sendmoney";
import Cashout from "../Component/Cashout/Cashout";
import CashIn from "../Component/Cashin/CashIn";
import UserTrans from "../Component/UserTrans/UserTrans";
import UserManagement from "../Component/UserManagement/UserManagement";
import SystemMonitoring from "../Component/SystemMonitoring/SystemMonitoring";
export const router = createBrowserRouter([
	{
		path: "/",
		element: <Register></Register>,
	},
	{
		path: '/login',
		element: <LoginPage></LoginPage>
	},

	{
		path: '/dashboard',
		element: <DashboardLayout></DashboardLayout>,
		children: [
			{
				path: "my-profile",
				element: <Profile></Profile>
			},
			{
				path:"send-money",
				element:<Sendmoney></Sendmoney>
			},
			{
				path:'cash-out',
				element: <Cashout></Cashout>
			},
			{
				path: 'cash-in',
				element: <CashIn></CashIn>
			},
			{
				path: 'user-trans',
				element: <UserTrans></UserTrans>
			},
			{
				path: 'user-management',
				element: <UserManagement></UserManagement>
			},
			{
				path: "system-monitoring",
				element: <SystemMonitoring></SystemMonitoring>
			}
		]
	}
]);
