import React from 'react';
import { Divider } from 'antd';

const Informations: React.FC = () => (
  <div className='flex border p-3'>
    <div className='flex flex-col gap-4'>
        <span className='text-lg font-semibold'>Shipping Address</span>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </div>
    
    <Divider type='vertical' />
    <div className='flex flex-col gap-4'>
        <span className='text-lg font-semibold'>Payment Information</span>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </div>
    <Divider  type='vertical' />
    <div className='flex flex-col gap-4'>
        <span className='text-lg font-semibold'>Order Notes</span>
        <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
      probare, quae sunt a te dicta? Refert tamen, quo modo.
    </p>
    </div>
  </div>
);

export default Informations;