import React, { useLayoutEffect } from 'react';

export default () => {
    useLayoutEffect(() => {
        if (typeof window !== 'undefined') window.location = '/';
    }, []);

    return <></>;
}
