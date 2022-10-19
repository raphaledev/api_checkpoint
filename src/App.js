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
        <UserList users = {users} />
    </div>
  );
}

export default App;