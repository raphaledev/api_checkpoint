import "./App.css";
import { useState, useEffect } from "react";
import UserList from "./UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState(null);


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result) => {
      setUsers(result.data);
    });
  }, []);

  return (
    <div>
      {users ? (
        <UserList users={users} />
      ) : (
        <h1>A Moment ...</h1>
      )}
    </div>
  );
}

export default App;