// import React, { useState } from "react";
// import { useCart } from "../context/CartContext";
// import { useWallet } from "../context/walletcontext";

// export default function Checkout() {
//   const { cart, clearCart } = useCart();
//   const { balance, deductMoney } = useWallet();
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

//   const handlePayment = () => {
//     if (total > balance) {
//       setError("Insufficient wallet balance. Please recharge.");
//       return;
//     }

//     deductMoney(total);
//     clearCart();

//     setSuccess("Payment Successful! Order Placed 🎉");
//   };

//   return (
//     <div className="max-w-lg mx-auto bg-white p-6 shadow rounded">
//       <h1 className="text-2xl font-bold mb-4">Checkout</h1>

//       <p className="text-lg mb-2">Cart Total: ₹{total}</p>
//       <p className="text-lg mb-4">Wallet Balance: ₹{balance}</p>

//       {error && <p className="text-red-600 mb-2">{error}</p>}
//       {success && <p className="text-green-600 mb-2">{success}</p>}

//       <button
//         onClick={handlePayment}
//         className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
//       >
//         Pay Using Wallet
//       </button>
//     </div>
//   );
// }



import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useWallet } from "../context/walletcontext";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const [cart, setCart] = useState([]);
  const [wallet, setWallet] = useState(0);
  const navigate = useNavigate();
  // const [total, setTotal] = useState(0);
  const location = useLocation();
  const total = location.state?.total || 0;
  const walletBalance = Number(localStorage.getItem("wallet_balance")) || 0;
  const { clearCart } = useCart();


  console.log(total);

  // useEffect(() => {
  //   // Load cart data
  //   const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCart(cartData);

  //   // Calculate total price
  //   const sum = cartData.reduce((acc, item) => acc + item.price * (item.qty || 1), 0);
  //   setTotal(sum);

  //   // Load wallet balance
  //   const balance = Number(localStorage.getItem("walletBalance")) || 0;
  //   setWallet(balance);
  // }, []);

  const handlePayment = () => {
    if (walletBalance < total) return;

    const newBalance = walletBalance - total;
    setWallet(newBalance);

    // Save updated wallet balance
    localStorage.setItem("wallet_balance", newBalance);
    useWallet,

    toast.success("Payment Success")
    clearCart();
    navigate("/")
  };


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-600">Checkout</h1>

      {/* CART ITEMS */}
      <div className="bg-white p-5 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Your Items</h2>

        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div
              key={item._id}
              className="flex justify-between py-3 border-b border-gray-200"
            >
              <div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-500">
                  ₹{item.price} × {item.qty || 1}
                </p>
              </div>
              <p className="font-semibold">₹{item.price * (item.qty || 1)}</p>
            </div>
          ))
        )}

        {/* TOTAL */}
        <div className="flex justify-between mt-4 text-xl font-semibold">
          <span>Total</span>
          <span>{total} SHARP</span>
        </div>
      </div>

      {/* WALLET */}
      <div className="bg-white p-5 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold mb-4">Wallet Info</h2>

        <div className="flex justify-between py-2 text-lg">
          <span>Wallet Balance:</span>
          <span className="text-blue-600 font-bold cursor pointer" onClick={()=> navigate("/wallet")}>{walletBalance} SHARP</span>
        </div>

        {/* <div className="flex justify-between py-2 text-lg">
          <span>Remaining Balance:</span>
          <span className={remainingBalance >= 0 ? "text-green-600" : "text-red-600"}>
            ₹{remainingBalance}
          </span>
        </div> */}
      </div>

      {/* PAY BUTTON */}
      <button
        onClick={handlePayment}
        disabled={walletBalance < total}
        className={`mt-6 w-full py-3 rounded-lg text-white text-xl font-semibold ${walletBalance >= total ? "bg-green-600" : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Pay Now
      </button>
    </div>
  );
}
