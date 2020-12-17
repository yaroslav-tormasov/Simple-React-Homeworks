import React, {ChangeEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClassTrue = s.error;
    const displayNone = s.displayNone;// need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={error ? inputClassTrue : ''}/>
            <span className={error ? s.errorText : displayNone}>{error ? 'введите имя' : ''}</span>
            <button onClick={addUser} className={s.button}>add</button>
            <br/>
            <span className={s.totalUsers}>добавлено юзеров: {totalUsers}</span>
        </div>
    );
}

export default Greeting;
