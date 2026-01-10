import Button from "../components/ui/Button"

function User({user={userName : "simran@gmail.com", firstName : "Simran", lastName : "Bhatnagar", _id : 12345}}) {
    let fullName = user.firstName + " " + user.lastName;
  return (
    <div className="flex justify-between px-2">
        <div className="flex gap-4 items-center justify-center">
            <div className='w-8 h-8 rounded-full bg-slate-200 px-2 flex items-center justify-center text-sm'>
                {user.userName[0].toUpperCase()}
            </div>
            <div>
                {fullName}
            </div>
        </div>

        <div className='w-30'>
            <Button label={"Send Money"}/>
        </div>
    </div>
  )
}

export default User