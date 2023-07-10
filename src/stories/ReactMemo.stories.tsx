import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}


const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const Users = (props: { users: string[] }) => {
    console.log('users new')
    return (<div>
        {props.users.map((user, index) => <div key={index}>{user}</div>)}
    </div>)
}

const UsersMemoised = React.memo(Users);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Anton'])

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <NewMessagesCounter count={counter}/>
            <UsersMemoised users={users}/>
        </div>
    )
}