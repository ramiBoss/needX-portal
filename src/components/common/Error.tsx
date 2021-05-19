import React from 'react';

const ErrorRobot = (props) => {
    return(
        <div className="row">
            <div className="colsm-12" style={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Error</h1>
                <h3>{props.message}</h3>
            </div>
        </div>    
    );
}

export default ErrorRobot;