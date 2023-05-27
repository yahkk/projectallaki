import {
  CreditCardIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/20/solid";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CommandPage = () => {
  const [accountNumber, setaccountNumber] = useState("");
  const location = useLocation();
  let  data = location.state;
  const navigate = useNavigate();

  console.log(data)

  async function handleClick() {
    await axios.post("http://localhost:8082/api/payment", {
      cardNumber: accountNumber,
      orderId: data.order._id,
    });
    navigate("/payement");
  }
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 p-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="font-medium text-2xl">Application Mcommerce</h1>
        <div>
          <div className="w-[300px] h-[200px]">
            <label
              htmlFor="account-number"
              className="block text-sm font-medium text-gray-700"
            >
              Card number
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="text"
                name="account-number"
                required
                id="account-number"
                value={accountNumber}
                onChange={(e) => setaccountNumber(e.target.value)}
                className="block w-full h-[40px] rounded-md border-gray-300 pr-20 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="000-00-0000"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <QuestionMarkCircleIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            onClick={() => handleClick()}
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <CreditCardIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            Payer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommandPage;
