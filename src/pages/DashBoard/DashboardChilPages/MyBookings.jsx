import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useState } from "react";
import MyBookingsCard from "../DashboardComponents/MyBookingsCard";


const MyBookings = () => {

    const { user } = useContext(AuthContext)

    const [ids, setids] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.uid}`)
            .then((res) => res.json())
            .then((data) => {
                setids(data.bookedProducts)
            })
    }, [user])




    return (
        <div className="overflow-y-auto py-1 space-y-10 px-7 h-[100vh]">


            {
                ids.length <= 0 ?


                    <h3 className="text-3xl font-secondary font-semibold text-white">No Product Found</h3>


                    :



                    <div>
                        {
                            ids.map((id, idx) =>
                                <MyBookingsCard key={idx} id={id}></MyBookingsCard>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default MyBookings;