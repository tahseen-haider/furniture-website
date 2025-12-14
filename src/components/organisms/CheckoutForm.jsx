import {
  Heading,
  Select,
  Paragraph,
  Divider,
  Button,
  AddressForm,
  CheckoutPaymentSummary,
} from '@components';
import { deliveryCountries } from '@config';
import { useRef, useState } from 'react';

const emptyAddress = {
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postalCode: '',
  phone: '',
  email: '',
};

const CheckoutForm = () => {
  const [region, setRegion] = useState(localStorage.getItem('region') || 'pakistan');
  const [shippingAddress, setShippingAddress] = useState(emptyAddress);
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true);
  const [billingAddress, setBillingAddress] = useState(emptyAddress);

  const [shippingErrors, setShippingErrors] = useState({});
  const [billingErrors, setBillingErrors] = useState({});

  const formRef = useRef();

  const validateAddress = (address) => {
    const errors = {};
    if (!address.firstName.trim()) errors.firstName = 'First name is required';
    if (!address.address.trim()) errors.address = 'Address is required';
    if (!address.city.trim()) errors.city = 'City is required';
    if (address.email && !/^\S+@\S+\.\S+$/.test(address.email))
      errors.email = 'Invalid email format';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const shippingErr = validateAddress(shippingAddress);
    const billingErr = billingSameAsShipping ? {} : validateAddress(billingAddress);

    setShippingErrors(shippingErr);
    setBillingErrors(billingErr);

    if (Object.keys(shippingErr).length || Object.keys(billingErr).length) {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    const payload = {
      region,
      shippingAddress,
      billingAddress: billingSameAsShipping ? shippingAddress : billingAddress,
    };
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-2xl lg:max-w-xl p-4 lg:p-9 flex flex-col gap-8 mb-8"
    >
      <div className="flex flex-col gap-4" ref={formRef}>
        <Heading variant="medium">Delivery Information</Heading>

        <Select
          value={region}
          onChange={(val) => {
            localStorage.setItem('region', val);
            setRegion(val);
          }}
          label="Country / Region"
          options={deliveryCountries}
        />

        <AddressForm data={shippingAddress} onChange={setShippingAddress} errors={shippingErrors} />
      </div>

      <Divider />

      <div className="flex flex-col gap-4">
        <Heading variant="medium">Payment</Heading>

        <div className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-md text-yellow-800">
          <Paragraph variant="F" className="text-sm">
            Note: Currently, we accept <strong>Cash on Delivery (COD)</strong> only.
          </Paragraph>
        </div>

        <div className="flex flex-col gap-2">
          <Heading variant="title" className="text-gray-700">
            Billing Address
          </Heading>
          <div className="border border-gray-300 rounded-xl overflow-hidden">
            <div
              className={`${billingSameAsShipping ? 'border' : 'border-none'} p-4 border-blue-700 rounded-t-xl`}
            >
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="radio"
                  name="billingAddress"
                  className="peer hidden"
                  checked={billingSameAsShipping}
                  onChange={() => setBillingSameAsShipping(true)}
                />
                <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center peer-checked:border-blue-700 peer-checked:border-5 transition">
                  <span className="w-2.5 h-2.5 rounded-full bg-white scale-0 peer-checked:scale-100 transition" />
                </span>
                <Paragraph variant="F">Same as shipping address</Paragraph>
              </label>
            </div>

            <div
              className={`${billingSameAsShipping ? 'border-none' : 'border'} p-4 border-blue-700 rounded-b-xl`}
            >
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  className="hidden peer"
                  checked={!billingSameAsShipping}
                  onChange={() => setBillingSameAsShipping(false)}
                />
                <span className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center peer-checked:border-blue-700 peer-checked:border-5 transition">
                  <span className="w-2.5 h-2.5 rounded-full bg-white scale-0 peer-checked:scale-100 transition" />
                </span>
                <Paragraph variant="F">Use a different billing address</Paragraph>
              </label>

              <div
                className={`overflow-hidden transition-all ease-in-out duration-300 ${
                  billingSameAsShipping
                    ? 'max-h-0 opacity-0 mt-0'
                    : 'max-h-[1000px] opacity-100 mt-4'
                }`}
              >
                <AddressForm
                  data={billingAddress}
                  onChange={setBillingAddress}
                  errors={billingErrors}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider className="block lg:hidden" />
      <div className="block lg:hidden">
        <CheckoutPaymentSummary />
      </div>
      <Divider />
      <Button type="submit" secondary>
        Place Order
      </Button>
    </form>
  );
};

export default CheckoutForm;
