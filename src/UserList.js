const UserList = ({ users }) => {
        return (
        <div className="user-group">
            {users.map((user) => (
            <div className="user" key={user.id}>
                <p>Name : {user.name}</p>
                <p>Username : {user.username}</p>
                <p>Email : {user.email}</p>
                <p>Address {user.address}</p>
                <ul>
                    <li>{user.address.street}</li>
                    <li>{user.address.suite}</li>
                    <li>{user.address.city}</li>
                    <li>{user.address.street}</li>
                </ul>
                <p>Phone : {user.phone}</p>
                <p>Website : {user.website}</p>
            </div>
            ))}
        </div>
        );
    };  
export default UserList;


//   "address": {
//     "street": "Kulas Light",
//     "suite": "Apt. 556",
//     "city": "Gwenborough",
//     "zipcode": "92998-3874",
//     "geo": {
//       "lat": "-37.3159",
//       "lng": "81.1496"
//     }
//   },
//   "phone": "1-770-736-8031 x56442",
//   "website": "hildegard.org",
//   "company": {
//     "name": "Romaguera-Crona",
//     "catchPhrase": "Multi-layered client-server neural-net",
//     "bs": "harness real-time e-markets"