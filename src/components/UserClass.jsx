import React from "react";

class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            userInfo : {
                name : "UserName",
                followers_url : "UserLocation"
            }
        };
    }

    async componentDidMount() 
    {
        const data = await fetch("https://api.github.com/users/Ch-Sai-Jaswanth");
        const json = await data.json();

        //console.log(json);

        this.setState({
            userInfo : json
        })
    }

    // componentDidUpdate(prevprops, prevState) {
    //     if(this.state.count !== prevState.count) {
            
    //     }
    // }
    
    render() {
        const { login, followers_url, avatar_url } = this.state.userInfo;
        //debugger;
        return (
            <div className="user-card">
                {/* <h2>Count : {this.state.count}</h2> */}
                <img src={avatar_url} />
                <h1>Name : { login }</h1>
                <h2>Location : { followers_url }</h2>
            </div>
        )
    }
}

export default UserClass;