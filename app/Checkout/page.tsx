"use client";
import { useState, useEffect } from "react";
import { GiConfirmed } from "react-icons/gi";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loading w-36">Loading...</div>
      <div className="text-2xl main-content font-bold mt-4">
        Processing Payment...
      </div>
    </div>
  );
};

const PaymentSuccessAnimation = () => {
  return (
    <div className="success-animation ">
      {" "}
      <GiConfirmed className="text-9xl mx-auto mb-10" />
      <div className="text-3xl main-content font-bold">
        Your Order has been placed{" "}
        <p className="text-sm text-center text-white-400/50">
          [order id: 223XXXXX0938]
        </p>
      </div>
    </div>
  );
};

function Checkout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsPaymentSuccess(true);
    }, 5000);

    const paymentSuccessTimer = setTimeout(() => {
      setIsPaymentSuccess(false);
      window.location.href = "/";
    }, 8000);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(paymentSuccessTimer);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {isLoading ? (
        <Loading />
      ) : isPaymentSuccess ? (
        <>
          <PaymentSuccessAnimation />
        </>
      ) : (
        <> </>
      )}
    </div>
  );
}

export default Checkout;
