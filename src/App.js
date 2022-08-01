import Header from "./components/Header";
import UserList from "./components/users/UserList";
import UserAdd from "./components/users/UserAdd";

function App() {
    const pageTitle = "User Manager"

  return (
    <div className="container">
        <Header/>

        <UserList title={pageTitle} />
    </div>
  );
}

export default App;
