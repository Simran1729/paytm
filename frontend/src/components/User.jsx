import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button"

function User({user}) {
    const navigate = useNavigate();

    let fullName = user.firstName + " " + user.lastName;
    const onClick = () => {
        const id = user._id;
        navigate(`/send?id=${id}&name=${fullName}`)
    }

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
            <Button label={"Send Money"} onClick={onClick}/>
        </div>
    </div>
  )
}

export default User