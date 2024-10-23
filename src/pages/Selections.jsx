import React from 'react';
import Selection from '../components/Selection';
import { selectionsData } from '../data/selections';

const Selections = () => {
    return (
        <div>
            <Selection selectionsData={selectionsData} />
        </div>
    )
}

export default Selections