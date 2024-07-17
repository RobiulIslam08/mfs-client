
// // export default LoginPage;
// import axios from 'axios';
// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//     const [formData, setFormData] = useState({
//         identifier: '', // this can be either mobile number or email
//         pin: ''
//     });
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:5000/api/users/login', formData); // Ensure the URL is correct
//             localStorage.setItem('token', response.data.token); // Save token to localStorage
//             alert(response.data.message);
//             navigate('/dashboard'); // Redirect to dashboard or any other protected route
//         } catch (error) {
//             console.error('Error logging in', error);
//             alert('Login failed, please check your credentials');
//         }
//     };

//     return (
//         <div className="flex justify-center items-center min-h-screen bg-gray-800 p-4">
//             <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identifier">
//                         Mobile Number or Email:
//                     </label>
//                     <input
//                         className="shadow appearance-none border bg-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
//                         id="identifier"
//                         type="text"
//                         name="identifier"
//                         value={formData.identifier}
//                         onChange={handleChange}
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
//                         PIN:
//                     </label>
//                     <input
//                         className="shadow appearance-none border bg-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
//                         id="pin"
//                         type="password"
//                         name="pin"
//                         value={formData.pin}
//                         onChange={handleChange}
//                         required
//                         pattern="\d{5}"
//                         title="PIN must be a 5-digit number"
//                     />
//                 </div>
//                 <div className="flex items-center justify-between">
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                         type="submit"
//                     >
//                         Login
//                     </button>
//                 </div>
//                 <p className="text-black text-xs">
//                     Don't have an account? <Link to="/"><span className="font-bold">Register</span></Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default LoginPage;
import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const LoginPage = () => {
    const [formData, setFormData] = useState({
        identifier: '',
        pin: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/users/login', formData);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user)); // Save user info to localStorage
            toast(response.data.message);
            navigate('/dashboard/my-profile'); // Redirect to dashboard or any other protected route
        } catch (error) {
            console.error('Error logging in', error);
            toast.error('Login failed, please check your credentials');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800 p-4">
            <ToastContainer></ToastContainer>
            <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identifier">
                        Mobile Number or Email:
                    </label>
                    <input
                        className="shadow appearance-none border bg-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="identifier"
                        type="text"
                        name="identifier"
                        value={formData.identifier}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
                        PIN:
                    </label>
                    <input
                        className="shadow appearance-none border bg-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
                        id="pin"
                        type="password"
                        name="pin"
                        value={formData.pin}
                        onChange={handleChange}
                        required
                        pattern="\d{5}"
                        title="PIN must be a 5-digit number"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <p className="text-black text-xs">
                    Don't have an account? <Link to="/"><span className="font-bold">Register</span></Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
