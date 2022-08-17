import { useState } from 'react';

const useModal = (dafault) => {
    const [isShowing, setIsShowing] = useState(dafault || false);

    const toggle = () => {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export default useModal;