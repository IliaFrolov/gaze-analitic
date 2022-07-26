import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_TRY_AGAIN_PAGE, SAVED_USER_KEY, SAVED_USER_RESULT } from "../constants";
import { updateUserData } from "../firebase/api";

const TestPage = () => {
    const savedKey = JSON.parse(localStorage.getItem(SAVED_USER_KEY));
    const savedResult = JSON.parse(localStorage.getItem(SAVED_USER_RESULT));
    const [result, setResult] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (savedResult) {
            navigate(PATH_TRY_AGAIN_PAGE, { replace: true });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const onSubmit = (e) => {
        e.preventDefault();
        updateUserData(savedKey, result, () => {
            localStorage.setItem(SAVED_USER_RESULT, JSON.stringify(result));
        });
        setResult('')
        console.log({ result });
    }

    return (
        <form>
            <div>
                <input
                    type="text"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    placeholder="Result"
                    aria-label="result"
                />
            </div>
            <div><button onClick={onSubmit} >Make some result</button></div>
        </form>
    )
}

export default TestPage