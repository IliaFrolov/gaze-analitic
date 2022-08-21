import {
    PATH_SING_IN_PAGE,
    SAVED_USER_IS_CALIBRATED,
    SAVED_USER_KEY,
    SAVED_USER_NAME,
    SAVED_USER_HAS_RESULT,
} from './../constants';

const Logout = (navigate) => {
    localStorage.removeItem(SAVED_USER_NAME);
    localStorage.removeItem(SAVED_USER_KEY);
    localStorage.removeItem(SAVED_USER_HAS_RESULT);
    localStorage.removeItem(SAVED_USER_IS_CALIBRATED);
    navigate(PATH_SING_IN_PAGE);
};
export default Logout;
