import React, {Fragment, useState, useEffect} from "react"

const PlayersList = () => {
    const [players, setPlayers] = useState([]);
    const getPlayers = async () => {
        try{
            const response = await fetch("http://localhost:5000/players");
            console.log(response);
            const jsonData = await response.json();
            setPlayers(jsonData);
        }catch(err){
            console.error(err.message);
        }
    }
    useEffect(() => {
        getPlayers();
    }, []);
    return (
        <Fragment>
            <ul>{players.map((p)=>{
                return <li>{p.full_name}</li>
            })}</ul>
        </Fragment>
    )
}

export default PlayersList;