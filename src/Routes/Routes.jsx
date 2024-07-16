import { createBrowserRouter } from "react-router-dom";

import Register from "../Component/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import LoginPage from "../Component/LoginPage/LoginPage";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Register></Register>,
		
	},
	{
		path:'login',
		element: <LoginPage></LoginPage>
	},
	
	{
		path:'/dashboard',
		element: <DashboardLayout></DashboardLayout>
	}
]);
