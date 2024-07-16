// src/components/Register.js
import axios from 'axios';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        pin: '',
        mobileNumber: '',
        email: '',
        role: 'User', // default value
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
	
    const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(formData)
        try {
            const response = await axios.post('/api/users/register', formData);
            alert(response.data.message);
        } catch (error) {
            console.error('Error registering user', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-800  p-4">
            <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input className="shadow appearance-none border bg-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pin">
                        PIN:
                    </label>
                    <input className="shadow appearance-none border rounded bg-gray-300 w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="pin" type="password" name="pin" value={formData.pin} onChange={handleChange} required pattern="\d{5}" title="PIN must be a 5-digit number" />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileNumber">
                        Mobile Number:
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="mobileNumber" type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input className="shadow appearance-none bg-gray-300 border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
                        Role:
                    </label>
                    <select className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-300 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="role" name="role" value={formData.role} onChange={handleChange} required>
                        <option value="User">User</option>
                        <option value="Agent">Agent</option>
                    </select>
                </div>
                <div className="flex items-center justify-between">
                   <Link to='/dashboard'>
                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Register
                    </button>
                   </Link>
                </div>
            <p className='text-black text-xs'>already have an account? <Link to="login"><span className='font-bold'>log in</span></Link></p>
            </form>
        </div>
    );
};

export default Register;
