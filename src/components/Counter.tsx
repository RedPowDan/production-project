import classes from  './Counter.module.scss';
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Нажми на меня!</button>
        </div>
    );
};

export default Counter;