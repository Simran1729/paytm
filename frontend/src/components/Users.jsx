import Input from "../components/ui/Input"
import User from './User'
function Users({users=[
       {userName : "simran@gmail.com", firstName : "Simran", lastName : "Bhatnagar", _id : 12345},
       {userName : "simran@gmail.com", firstName : "Simran", lastName : "Bhatnagar", _id : 12345},
       {userName : "simran@gmail.com", firstName : "Simran", lastName : "Bhatnagar", _id : 12345},
       {userName : "simran@gmail.com", firstName : "Simran", lastName : "Bhatnagar", _id : 12345},
       {userName : "simran@gmail.com", firstName : "Simran", lastName : "Bhatnagar", _id : 12345},
       {userName : "simran@gmail.com", firstName : "Simran", lastName : "Bhatnagar", _id : 12345} 
    ]}) {
  return (
    <>
        <div className="px-4">
            <div>
                <Input placeholder={"Search Users"} onChange={()=>{}}/>
            </div>

            <div>
                {users.map((user)=>{return <User key={user._id} user={user}/>})}
            </div>
        </div>
    </>
  )
}

export default Users