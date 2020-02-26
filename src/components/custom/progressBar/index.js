import React from 'react';
import Filler from './filler';

export default ({ color = 'black', textColor = 'white', percentage = 0, showPercentage = false }) => (
    <div
        className={`shadow w-full mt-5 mb-5 bg-gray-200`}
    >
        <Filler
            color={color}
            textColor={textColor}
            percentage={percentage}
            showPercentage={showPercentage}
        />
    </div>
)
