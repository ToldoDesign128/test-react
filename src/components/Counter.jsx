import React, { useState } from "react";

export function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Hai cliccato {count} volte</p>
            <button onClick={() => setCount(count + 1)}>Aggiungi Uno!</button>
        </div>
    )
}