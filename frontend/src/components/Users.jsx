import { useCallback, useEffect, useMemo, useState } from "react"
import Input from "../components/ui/Input"
import User from './User'
import { getUsers } from "../services/users";
import {debounce} from "lodash";

function Users() {
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);
const [filter, setFilter] = useState("");


//custom written
const debounceFn = (fn, delay) => {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

const debouncedFetchUsers = useCallback( 
    debounce(async(filter) => {
        setLoading(true)
        const users = await getUsers(filter);
        setUsers(users);
        setLoading(false);
    }, 600)
, []
)

useEffect(() => {
    debouncedFetchUsers(filter);
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