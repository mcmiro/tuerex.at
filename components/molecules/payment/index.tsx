import React from 'react';
import PaymentIcons from '../../../assets/icons/payment.svg';

const Payment = () => {
  return (
    <div className="flex justify-center relative w-full h-16 mt-[56px]">
      <img src={PaymentIcons.src} alt={'zahlungsoptionen bei türex'} />
    </div>
  );
};

export default Payment;
