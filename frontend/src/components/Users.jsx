import { useEffect, useState } from "react"
import Input from "../components/ui/Input"
import User from './User'
import { getUsers } from "../services/users";
function Users() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [filter, setFilter] = useState("");

//add debouncing here
//TODO : USING YOUR raw fn + loadash
useEffect(() => {
    const fetchUsers = async() => {
        setLoading(true)
        const users = await getUsers(filter);
        setUsers(users);
        setLoading(false);
    }
    fetchUsers();
}, [filter])

  return (
    <>
        <div className="px-4">
            <div>
                <Input placeholder={"Search Users"} onChange={(e)=>{setFilter(e.target.value)}}/>
            </div>

            {loading && <div>Loading...</div>}

            {!loading && users.length === 0 && <div>No Users</div>}

            {!loading &&
                users.map((user) => (
                <User key={user._id} user={user} />
                ))}
        </div>
    </>
  )
}

export default Users