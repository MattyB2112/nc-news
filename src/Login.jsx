import { useContext, useEffect, useState } from "react";
import { fetchUsers } from "./APICalls";
import { UserContext } from "./UserContext";

export default function LoginPage() {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [users, setUsers] = useState();

  useEffect(() => {
    fetchUsers().then((result) => {
      setUsers(result.data.users);
    });
  }, []);

  const changeUser = (user) => {
    setSignedInUser(user);
    localStorage.clear();
    localStorage.setItem("name", user.username);
  };

  return (
    <div>
      <h2>Click a picture below to log in!</h2>
      {users?.map((user) => {
        return (
          <div className="user-holder">
            <div className="picture-and-button">
              <button
                className="user-button"
                onClick={() => {
                  changeUser(user);
                }}
              >
                <img className="user-image" src={user.avatar_url} />
              </button>
            </div>
            <div className="user-username">{user.username}</div>
          </div>
        );
      })}
    </div>
  );
}
