import Image from "./Images/pagenotfound.jpeg";

export default function ErrorPage() {
  return (
    <div>
      <h1>Sorry, it looks like that isn't a valid link!</h1>
      <img
        className="page-not-found-img"
        src={Image}
        alt="cartoon detective with a magnifying glass"
      />
    </div>
  );
}
