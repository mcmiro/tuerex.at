import React from 'react';
import Image from 'next/image';
import PaymentIcons from '../../../assets/icons/payment.svg';

const Payment = () => {
  return (
    <div className="relative w-full h-16 mt-[56px]">
      <Image
        src={PaymentIcons}
        alt={'zahlungsoptionen bei türex'}
        layout="fill"
        className="w-full"
      />
    </div>
  );
};

export default Payment;
