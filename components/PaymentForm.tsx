import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51Pndh5JDC46DMc9S02yARDGmsf40Ln9AK7zKE6quC2yZZvzEtXQhjc5oba91gbp9klRwte1SLjJHymSvCFNMc96700MWLMO52v"
);

const PaymentForm = (total: any) => {
  const handleClick = async () => {
    const stripe = await stripePromise;
    if (stripe) {
      const amount = total;
      const { error } = await stripe.redirectToCheckout({
        mode: "payment",
        lineItems: [{ price: "price_id_here", quantity: 1 }],
        successUrl: "https://your-website.com/success",
        cancelUrl: "https://your-website.com/cancel",
      });

      if (error) {
        console.error(error);
      }
    }
  };

  return (
    <button className="btn mt-7" onClick={handleClick}>
      Pay with Stripe
    </button>
  );
};

export default PaymentForm;
