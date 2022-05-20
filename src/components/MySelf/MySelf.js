import React from 'react';
import Special from '../Special/Special';

const MySelf = ({house}) => {
    return (
        <div>
            <h5>Myself</h5>
            <h5>house: {house}</h5>
            <Special></Special>
        </div>
    );
};

export default MySelf;