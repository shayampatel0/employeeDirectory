import React, {useState, useEffect} from "react";
// import DataTable from "./DataTable";
// import Nav from "./Nav";
import API from "../utils/API";
// import "../styles/DataArea.css";
import DataTable from "./DataTable";



const DataArea = () => {
    const [user, setUsers] = useState({users: null, filteredUsers:null})
    //
    useEffect(() => {
        getUserData()
    }, [])    

    const getUserData = async()=>{
        let data = await API.getUsers()

        setUsers({users: data, filteredUsers:data})
    }

    const sortBy = (e) =>{
        e.preventDefault();

        if(e.target.value ==="Name"){
            //function to sort by Name
        }
    }

    
    return (
        <div>
            Hello
            <DataTable dataUsers={user} sortBy={sortBy} />
        </div>
    )
}

export default DataArea





// handleSort = heading => {
//     if(.this.state.order === "descend"){
//         this.setState({
//             order: "ascend"
//         })
//     }
//     else {
//         this.setState({
//             order: "descend"
//         })
//     }
// }
// const comparingFxn = (a,b) => {
//     if(this.state.order === "ascend"){
//         if(a[heading] === undefined) {
//             return 1;
//         }
//         else if (b[heading] === undefined){
//             return -1;
//         }
//         else if (heading === "name"){
//             return a[heading].first.localeCompare(b[heading])
//         }
//     }
// }

