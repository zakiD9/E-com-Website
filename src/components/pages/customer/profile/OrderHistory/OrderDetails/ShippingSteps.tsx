import React from 'react';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ShippingSteps: React.FC = () => (
  <Steps
    items={[
      {
        title: 'Order Placed',
        status: 'finish',
        icon: "",
      },
      {
        title: 'Packaging',
        status: 'finish',
        icon: "",
      },
      {
        title: 'On The Road',
        status: 'process',
        icon: "",
      },
      {
        title: 'Delivered',
        status: 'wait',
        icon: "",
      },
    ]}
  />
);

export default ShippingSteps;