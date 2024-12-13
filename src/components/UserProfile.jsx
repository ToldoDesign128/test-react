import React from "react";
import PropTypes from "prop-types";

export function UserProfile({name, age, hobbies, children}) {
    return(
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            {hobbies?.length > 0 && (
                <ul>
                    {hobbies.map((hobby, index)=>(
                        <li key={index}>{hobby}</li>
                    ))}
                </ul>
            )}
            {children}
        </div>
    )
}

UserProfile.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    hobbies: PropTypes.arrayOf(PropTypes.string)
}