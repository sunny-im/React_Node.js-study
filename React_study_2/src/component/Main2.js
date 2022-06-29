import React from "react";
import dummy from "./dummy.json";

const Main2=(props) => {
    return (
        <div>
            {/* <div>
                <h3>나는 {props.name}이고 {props.age}살 입니다.</h3>
            </div> */}

            <div>
                {dummy.users.map(user => (
                    <h3 key={user.userName}>안녕 {user.userName}! {user.age}!!!!</h3>
                ))}
            </div>
        </div>
    );
};

export default Main2;