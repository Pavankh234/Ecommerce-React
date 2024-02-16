import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="container mx-auto my-8">
    {cart.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {cart.map((item, index) => (
            <CartItem key={item.id} item={item} itemIndex={index} />
          ))}
        </div>
  
        <div className="h-100"> {/* Set the width to 100% */}
          <div className="bg-gray-200 p-4 rounded h-75">
            <div className="mb-4">
              <div className="font-bold text-xl mb-2">Your Cart</div>
              <div className="font-bold text-xl mb-2">Summary</div>
              <p className="mt-1">
                <span className="text-gray-700">Total Items: {cart.length}</span>
              </p>
            </div>
            <div>
            <p className="text-xl font-bold mb-2">Total Amount: ${totalAmount}</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              CheckOut Now
            </button>
          </div>
        </div>
      </div>
    </div>

      ) : (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Cart Empty</h1>
          <Link to={"/"}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
