import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const MyToys = () => {

    const {user} = useContext(AuthContext);
    const [myGames, setMyGames] = useState([]);
    const url =`http://localhost:5000/games/mydata?email=${user?.email}`
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=> setMyGames(data))
    },[url]);

    console.log(myGames)


    return (
        <div>
            this is my toys componets
        </div>
    );
};

export default MyToys;