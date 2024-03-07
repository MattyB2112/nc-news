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
      {users?.map((user) => {
        return (
          <div className="user-holder">
            <button
              onClick={() => {
                changeUser(user);
              }}
            >
              <img className="user-image" src={user.avatar_url} />
            </button>
            <div className="user-username">{user.username}</div>
          </div>
        );
      })}
    </div>
  );
}
