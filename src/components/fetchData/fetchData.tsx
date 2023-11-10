import React, { FC, useCallback, useEffect, useState, useRef } from 'react';
import init, { add, run } from "wasm_fetch_data";
import classes from './fetchData.module.css';


const FetchData: FC = () => {
    const [ans, setAns] = useState<number>(0);
    const a = useCallback(async () => {
        await init();
        setAns(add(1, 1));
        const result = await run();
        console.log(result);
    }, [run, init]);
    const effectRan = useRef<boolean>(false);
    useEffect(() => {
        if (!effectRan.current) {
            a();
        }

        return () => {
            effectRan.current = true;
        };
    }, []);

    return (
        <div className={classes.root}>
            <button onClick={() => a()} className={classes.button}>Hello Google</button>
            <p>1 + 1 = {ans}</p>
        </div>
    );
}

export default FetchData;
