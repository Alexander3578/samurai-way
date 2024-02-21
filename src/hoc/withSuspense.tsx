import React, {ComponentType, Suspense} from 'react';

export const withSuspense = <T,>(Component: ComponentType<T>) => {
    return (props: T) => {
        return <Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </Suspense>
    }
};

