import React from "react";
import ReactDOM from 'react-dom';
import s from './modal.module.css';
const Modal = ({ isShowing, hide, action, header, bodyText, bodyContent }) => {
    const onAction = () => {
        hide();
        action();
    }
    return (
        isShowing ? ReactDOM.createPortal(
            <React.Fragment>
                <div className={s.wrapper} >
                    <div className={s.modal} aria-modal aria-hidden tabIndex={-1} role="dialog">
                        <h1>{header}</h1>
                        {bodyText && <p>{bodyText}</p>}
                        {bodyContent}
                        <button type="button" data-dismiss="modal" onClick={onAction}>
                            Ok
                        </button>
                    </div>
                </div>
            </React.Fragment>, document.body
        ) : null
    )
}
export default Modal;
