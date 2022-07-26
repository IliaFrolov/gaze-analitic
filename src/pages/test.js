import React, { useState } from "react";

const TestPage = () => {
    const [result, setResult] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()
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