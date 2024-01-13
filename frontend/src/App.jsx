import { useState } fromreact";

import "./App.css";

// Import the AuthPage component for displaying the login/signup page
import AuthPage from "./AuthPage";

// Import the ChatsPage component foring the chats page
import ChatsPage from "./ChatsPage";

function App() {
  // Use the useState hook to create a state variable called "user"
  // and a function to update it called "setUser"
  const [user, setUser] = useState(undefined);

  // If the user is not logged in (i.e. the "user" state is undefined),
  // render the AuthPage component and pass the "setUser" function
  // as a prop called "onAuth"
  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  }
  // If the user is logged in (i.e. the "user" state is not undefined),
  // render the ChatsPage component and pass the "user" object as a prop
  else {
    return <ChatsPage user={user} />;
  }
}

// Export the App component for use in other modules
export default App;