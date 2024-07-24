import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const Filters = () => {
  const [isPriceOpen, setIsPriceOpen] = useState(true);
  const [isColourOpen, setIsColourOpen] = useState(true);
  const [isSizeOpen, setIsSizeOpen] = useState(true);
  const [isProductTagsOpen, setIsProductTagsOpen] = useState(true);

  return (
    <aside className="py-4 w-full md:w-1/4">
      <div className="flex items-center gap-5 mb-4">
        <h2 className="text-xl font-bold">Filters</h2>
        <p>Clear all</p>
      </div>
      <div className="mb-4">
        <h3 className="font-semibold">Categories</h3>
        <ul>
          <li>
            <input type="checkbox" id="jewelry" />{" "}
            <label htmlFor="jewelry">Jewelry and Accessories</label>
          </li>
          <li>
            <input type="checkbox" id="clothing" />{" "}
            <label htmlFor="clothing">Clothings and Textiles</label>
          </li>
          <li>
            <input type="checkbox" id="decor" />{" "}
            <label htmlFor="decor">Home Decor</label>
          </li>
          <li>
            <input type="checkbox" id="art" />{" "}
            <label htmlFor="art">Arts and Collectibles</label>
          </li>
          <li>
            <input type="checkbox" id="crafts" />{" "}
            <label htmlFor="crafts">Crafts Supplies</label>
          </li>
          <li>
            <input type="checkbox" id="books" />{" "}
            <label htmlFor="books">Books and Media</label>
          </li>
          {/* Add more categories as needed */}
        </ul>
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsPriceOpen(!isPriceOpen)}
        >
          Price
          <span>{isPriceOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isPriceOpen && (
          <ul>
            <li>
              <input type="checkbox" id="price1" />{" "}
              <label htmlFor="price1">$1000 to $2000</label>
            </li>
            <li>
              <input type="checkbox" id="price2" />{" "}
              <label htmlFor="price2">$2000 to $3000</label>
            </li>
            {/* Add more price ranges as needed */}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsColourOpen(!isColourOpen)}
        >
          Colour
          <span>{isColourOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isColourOpen && (
          <ul>
            <li>
              <input type="checkbox" id="black" />{" "}
              <label htmlFor="black">Black</label>
            </li>
            <li>
              <input type="checkbox" id="red" />{" "}
              <label htmlFor="red">Red</label>
            </li>
            {/* Add more colours as needed */}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsSizeOpen(!isSizeOpen)}
        >
          Size
          <span>{isSizeOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isSizeOpen && (
          <ul>
            <li>
              <input type="checkbox" id="s" /> <label htmlFor="s">S</label>
            </li>
            <li>
              <input type="checkbox" id="m" /> <label htmlFor="m">M</label>
            </li>
            <li>
              <input type="checkbox" id="l" /> <label htmlFor="l">L</label>
            </li>
            <li>
              <input type="checkbox" id="xl" /> <label htmlFor="xl">XL</label>
            </li>
            <li>
              <input type="checkbox" id="xxl" />{" "}
              <label htmlFor="xxl">XXL</label>
            </li>
            {/* Add more sizes as needed */}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <h3
          className="font-semibold cursor-pointer flex justify-between items-center"
          onClick={() => setIsProductTagsOpen(!isProductTagsOpen)}
        >
          Product tags
          <span>{isProductTagsOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
        </h3>
        {isProductTagsOpen && (
          <ul>
            <li>
              <input type="checkbox" id="sale" />{" "}
              <label htmlFor="sale">Sale</label>
            </li>
            <li>
              <input type="checkbox" id="new" />{" "}
              <label htmlFor="new">New</label>
            </li>
            {/* Add more tags as needed */}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Filters;
