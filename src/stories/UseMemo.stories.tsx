import React, {useMemo, useState} from "react";

export default {
    title: 'UseMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA= 1;
    let resultB= 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i;
        }
        return tempResultA;
    }, [a])



    for (let i = 1; i <= b; i++) {
        resultB *= i;
    }


    return (
        <div>
            <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
            <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>
    )
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


export const Example2 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Anton'])

    const newArray = useMemo(() => {
        return users.filter(el => el.toLowerCase().indexOf('a') > -1);
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()];
        setUsers(newUsers);
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => addUser()}>add user</button>
            {counter}
            <UsersMemoised users={newArray}/>
        </div>
    )
}