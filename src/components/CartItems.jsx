import Offer1 from "../assets/offer-3.png";
import { RxCross2 } from "react-icons/rx";
import { FaRegTrashCan } from "react-icons/fa6";

const CartItems = () => {
  return (
    <aside className="py-4 w-full md:w-3/4">
      <div className="my-4">
        <div className="flex gap-2 items-center">
          <div className="object-cover">
            <img src={Offer1} alt="" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-3xl ">Pottery</h3>
              <RxCross2 size={22} />
            </div>

            <p>$540</p>

            <div>Color</div>

            <div className="flex items-center gap-5">
              <p>Quantity</p>
              <div className="flex items-center gap-5">
                <span>-</span>
                <div>0</div>
                <span>+</span>
              </div>
            </div>

            <div>
              <button className="flex items-center gap-2">
                Remove <FaRegTrashCan />
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CartItems;
