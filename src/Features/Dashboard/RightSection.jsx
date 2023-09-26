import axios from "axios";
import { useEffect, useState } from "react";
import Table from "../../Components/Table";


const RightSection = () => {
    const sampleAPIEndPoint = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    const fetchUsersData = async () => {
        const response = await axios.get(sampleAPIEndPoint);
        console.log({response});
        setUsers(response.data);
}
    useEffect(() => {
        fetchUsersData()
    },[])
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: "0 30px",
        backgroundColor: "#EEEEEE",
      }}
    >
      <Table data={users} />
    </div>
  );
}

export default RightSection