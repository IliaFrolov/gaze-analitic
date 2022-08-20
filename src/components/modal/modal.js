import classNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button/botton';
import gs from './../../styles/global.module.css';
import s from './modal.module.css';
const Modal = ({ isShowing, hide, action, header, bodyText, bodyContent, buttonLabel = 'OK' }) => {
    const onAction = (action) => {
        hide();
        action();
    };

    const renderButton = () => {
        if (Array.isArray(action) || Array.isArray(buttonLabel)) {
            return buttonLabel.map((lbl, idx, arr) => (
                <Button
                    key={lbl + idx}
                    primary={idx === arr.length - 1}
                    data-dismiss="modal"
                    onClick={() => onAction(action[idx])}
                >
                    {lbl}
                </Button>
            ));
        }
        return (
            <Button data-dismiss="modal" onClick={() => onAction(action)}>
                {buttonLabel}
            </Button>
        );
    };

    return isShowing
        ? ReactDOM.createPortal(
              <React.Fragment>
                  <div className={s.modalOverlay}></div>
                  <div className={s.wrapper}>
                      <div className={s.modal} aria-modal aria-hidden tabIndex={-1} role="dialog">
                          <h1>{header}</h1>
                          {bodyText && <p>{bodyText}</p>}
                          {bodyContent}
                          <div className={classNames(s.buttonWrapper, gs.flexWrapperRowCenter)}>
                              {renderButton()}
                          </div>
                      </div>
                  </div>
              </React.Fragment>,
              document.body,
          )
        : null;
};
export default Modal;
