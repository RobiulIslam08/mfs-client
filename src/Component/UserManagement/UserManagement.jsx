
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

const UserManagement = () => {
	const { data = [], error, isLoading, refetch } = useQuery({
		queryKey: ['get-user-data'],
		queryFn: async () => {
			const { data } = await axios.get('http://localhost:5000/users');
			console.log(data); // Log the data to check its structure
			return data;
		}
	});
	const updateUserRole = async (status, updateUserEmail) => {
        console.log('update this role', status, updateUserEmail);
        const user = {
            status: status,
            
        };
        try {
            const { data } = await axios.patch(`http://localhost:5000/users/update/${updateUserEmail}`, user);
            toast.success('Updated user status successfully');
            refetch();
            return data;
        } catch (err) {
            console.log(err);
        }
    };

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	// Ensure data is an array before mapping
	const userData = Array.isArray(data) ? data : [];

	return (
		<div>
			<div>Data length: {userData.length}</div>
			<div className="overflow-x-auto">
				<table className="table">
					{/* head */}
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{/* row 1 */}
						{userData.map((item, index) => (
							<tr key={index}>
								<td>{item.name}</td>
								<td>{item.email}</td>
								<td>{item.mobileNumber}</td>
								<td>{item.status}</td>
								<td>
									<button onClick={() => updateUserRole('Activate', item.email)} className="btn btn-secondary mr-2 mb-2 btn-xs">Activate</button>
									<button onClick={() => updateUserRole('Block', item.email)} className="btn btn-secondary btn-xs">Block</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default UserManagement;
