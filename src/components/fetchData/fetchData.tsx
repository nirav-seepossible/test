import React, { FC, useCallback, useEffect, useState, useRef } from 'react';
import init, { add, run } from "wasm_fetch_data";


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
        <div>
            <button onClick={() => a()}>Hello Google</button>
            <p>1 + 1 = {ans}</p>
        </div>
    );
}

export default FetchData;
