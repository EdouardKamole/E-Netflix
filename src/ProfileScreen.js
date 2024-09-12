import React from "react";
import "./ProfileScreen.css";
import Nav from "./Nav";
import { useSelector } from "react-redux"; // Import useSelector from react-redux
import { selectUser } from "./features/userSlice"; // Import selectUser to get user state
import { auth } from "./Firebase";
import PlanScreen from "./PlanScreen";

function ProfileScreen() {
  const user = useSelector(selectUser); // Use useSelector to get the user from Redux state

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen_body">
        <h1>Edit Profile</h1>
        <div className="profileScreen_info">
          <img
            src="https://i.pinimg.com/564x/32/3e/cc/323ecca68b7105d23184e783b86b0c5a.jpg"
            alt="Avatar"
          />
          <div className="profileScreen_details">
            <h2>{user.email}</h2> {/* Display user email correctly */}
            <div className="profileScreen_plans">
              <h3>Plans</h3>
              <PlanScreen />

              <button
                onClick={() => auth.signOut()}
                className="profileScreen_signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
