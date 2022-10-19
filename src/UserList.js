const UserList = ({ users }) => {
        return (
        <div className="user-group">
            {users.map((user) => (
            <div className="user" key={user.id}>
                <p>Name : {user.name}</p>
                <p>Username : {user.username}</p>
                <p>Email : {user.email}</p>
                <p>Address</p>
                <ul>
                    <li>{user.address.street}</li>
                    <li>{user.address.suite}</li>
                    <li>{user.address.city}</li>
                    <li>{user.address.zipcode}</li>
                </ul>
                <p>Phone : {user.name}</p>
                <p>Website {user.website}</p>
                {/* <p>Company : {user.company}</p> */}
            </div>
            ))}
        </div>
        );
    };  
export default UserList;
