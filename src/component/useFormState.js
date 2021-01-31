import {useState} from "react";
export default initialValue => {
    const [value, setValue] = useState(initialValue);

    const handleChange = e => {
        setValue(e.target.value);
    }

    const reset = () => {
        setValue(null);
    }
    
    return [value, handleChange];
}