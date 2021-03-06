import { useState } from "react";


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {
        const value = target.value;
        const name = target.name;

        setValues({ ...values, [ name ]: value });
    }

    const handleCheckboxChange = ({ target }) => {
        
        setValues({
            ...values,
            [ target.name ]: target.checked
        });

    }

    const handleObjectChange = ({ target }) => {
        setValues({
          ...values,
          [target.name]: JSON.parse(target.value)
        });
    }

    return [ values, handleInputChange, handleCheckboxChange, handleObjectChange, reset, setValues ];

}