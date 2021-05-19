import React from 'react';
import ErrorBoundary from '../common/ErrorBoundary';
import Header from '../Header/';

export default function PulicShell(props){
    const {...rest} = props;
    return(
        <div>
        <Header
            absolute
            color="primary"
            brand="NeedX"
            {...rest}
        />
            <ErrorBoundary>
                {props.children}
            </ErrorBoundary>
        
        </div>
    );
}
