import React, { useEffect, useState } from "react";

/* Class Component */

// export class Timer extends React.Component {
//     constructor(props) {
//         super( props );
//         this.state = {seconds: 0};
//     }

//     tick() {
//         this.setState(state => ({
//             seconds: state.seconds + 1
//         }))
//     }

//     componentDidMount() {
//         this.interval = setInterval(() => this.tick(), 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.interval);
//     }

//     render() {
//         return(
//             <div>Secondi: { this.state.seconds }</div>
//         )
//     }
// }

/* Functional Component */

export function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return( 
        <div>Secondi: {seconds}</div>
    )
}