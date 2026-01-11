import { useEffect, useState } from "react";
import { getBalance } from "../services/users"

function Balance() {
const [loading, setLoading] = useState(false);
const [balance, setBalance] = useState(0)

useEffect(() => {
  const fetchBalance = async() => {
      setLoading(true);
      const res = await getBalance();
      setBalance(res);
      setLoading(false);
  }
  fetchBalance();
}, [])
 
  return (
    <div className='flex gap-2 font-medium p-4'>
        <div>
        Your Balance
        </div>

        {!balance && loading && <div>Loading..</div>}
        {
          balance && <div>
                Rs {balance}
          </div>
        }
    </div>
  )
}

export default Balance