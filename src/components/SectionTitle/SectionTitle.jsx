import React from 'react';

const SectionTitle = ({heading , subHeading}) => {
    return (
        <div className='w-4/12 mx-auto justify-center text-center pb-12'>
            <p className='text-yellow-600 pb-3 '>--- {subHeading} ---</p>
            <h3 className='uppercase border-y-4 py-3 font-semibold text-3xl'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;