import { FirebaseDatabaseMutation } from "@react-firebase/database";
import React, { Component } from "react";

class MutationButton extends Component {
    props = {
        path: "",
        value: null,
        processResult: () => { },
        preRunAction: () => { },
        valid: true
    }

    render() {
        const { path, value, processResult, preRunAction, valid, children } = this.props;
        console.log(this.props);
        return (
            <React.Fragment>
                <FirebaseDatabaseMutation type="push" path={path}>
                    {({ runMutation }) => {
                        return (
                            <div>
                                <button
                                    disabled={!valid}
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        preRunAction();
                                        console.log({ value });
                                        if (valid) {
                                            const result = await runMutation("value");
                                            console.log({ result });
                                            processResult(result.key);
                                        }
                                    }}
                                >
                                    {children}
                                </button>
                            </div>
                        );
                    }}
                </FirebaseDatabaseMutation>

            </React.Fragment>
        );
    }
}
export default MutationButton;