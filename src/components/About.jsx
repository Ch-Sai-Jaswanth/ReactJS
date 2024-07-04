import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
    render() {
        return(
            <div className="about">
                <h1>About Us</h1>
                <UserClass name={"Chavata Sai Jaswanth"} location = {"Nandigama"}/>
            </div>
        )
    }
}
export default About;