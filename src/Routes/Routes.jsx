import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Register from "../Component/Register/Register";


export const router = createBrowserRouter([
	{
		path: "/",
		element: <Register></Register>,
	},
]);
