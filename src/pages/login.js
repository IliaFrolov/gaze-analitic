import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [name, setName] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("name");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(name.length);
        if (name.length) {
            navigate("../tryagain", { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleValidation = () => {
        let errors = [];
        let formIsValid = true;
        if (name.length < 3) { errors.push('too short name'); formIsValid = false; };
        if (name.length > 10) { errors.push('too long name'); formIsValid = false; };
        setError(errors.join(', '))
        return (formIsValid);

    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (handleValidation()) {
            localStorage.setItem("name", JSON.stringify(name))
            navigate("../")
        };
    };

    return (
        <form>
            <div>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full name"
                    aria-label="fullname"
                />
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div><button onClick={onSubmit} >Start</button></div>
        </form>
    )
}

export default LoginPage