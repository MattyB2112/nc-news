import { fetchUsers } from "./APICalls";

export default function getUserImage(username) {
  fetchUsers().then((result) => {
    return result;
  });
}
