export default function Header() {
  return (
    <>
      <div key="nav-bar" className="nav-bar">
        <div key="flex-box-left-holder" className="flex-box-left-holder">
          <h2 key="nav-topics" className="nav-topics">
            Topics
          </h2>
          <h2 key="nav-articles" className="nav-articles">
            Articles
          </h2>
        </div>
        <h1 key="nav-header" className="nav-header">
          Welcome to NC-News!
        </h1>
        <div key="flex-box-right-holder" className="flex-box-right-holder">
          <h2 key="nav-login" className="nav-login">
            Log-in
          </h2>
        </div>
      </div>
    </>
  );
}
