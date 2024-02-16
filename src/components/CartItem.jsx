
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    
<div className="bg-white p-4 mb-6 rounded-md shadow-md flex">
  {/* Image Container */}
  <div className="flex-none w-1/3 h-42 overflow-hidden">
    <img
      src={item.image}
      alt={item.title}
      className="object-cover w-full h-full"
    />
  </div>

  {/* Description, Title, and Delete Button Container */}
  <div className="flex-grow ml-4">
    <div>
      <h1 className="text-lg font-bold">{item.title}</h1>
      <p className="text-gray-600">{item.description}</p>
    </div>

    <div className="flex items-center justify-between mt-2">
      <p className="text-xl font-bold">${item.price}</p>
      <div onClick={removeFromCart} className="text-red-500 hover:text-red-700 cursor-pointer">
        < MdDelete className="w-6 h-6" />
      </div>
    </div>
  </div>
</div>



  );
};


export default CartItem;
