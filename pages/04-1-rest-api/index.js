import axios from "axios"
import { useEffect, useState } from "react";

export default function RestApiPage(){
    const [users, setUsers] = useState([]);

    async function fetchUsers() {
        const data = await axios.get('https://koreanjson.com/users');
        console.log(data.data);
        data && setUsers(data.data);
    }

    useEffect(() => {
        fetchUsers();
    }, []);
    

    return (
        <div>
            {users && users.map(el => {
                return <span key={el.id}>
                            <div>{`${el.id} - ${el.name}`} {}</div>
                        </span>
            })}
            {/* <button onClick={fetchUsers}>REST-API 요청하기!!</button> */}
        </div>
    )
}