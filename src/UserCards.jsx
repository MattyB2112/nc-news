import { useEffect } from "react";
import { fetchUsers } from "./APICalls";

export default function UserCards() {
  useEffect(() => {
    fetchUsers().then((result) => {
      console.log(result);
      setUsers(result);
    });
  }, []);
}
