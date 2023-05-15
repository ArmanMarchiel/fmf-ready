import { Fragment, useState } from "react";
import ProductPopup from "./popup/ProductPopup";
import Timeline from "./Timeline";

const Drops = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState({ img: "", title: "", brand: "", price: "", dec: ""});
  const dropData = [
    {
      img: "https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12731915_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg",
      title: "Slim-Fit Suit",
      brand: "BOSS",
      price: "Starting at $186",
      dec: "Slim Fit Suit, Beige Color",
    },
    {
      img: "https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12809728_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg",
      title: "Blue Button Down Shirt",
      brand: "David Donahue",
      price: "$145",
      dec: "David Donahue Trim Fit Royal Oxford Dress Shirt-Men",
    },
    {
      img: "https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12302659_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg",
      title: "Tan Slacks",
      brand: "Bloomingdales",
      price: "$178",
      dec: "The Men's Store at Bloomingdale's Regular Fit Dress Pants - 100% Exclusive-Men",
    },
    {
      img: "https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/11660637_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg",
      title: "Brown Dress Shoes",
      brand: "Geox",
      price: "$145",
      dec: "Geox Men's High Life Cap Toe Lace Up Dress Shoes-Men",
    },
  ];

  const onClick = (value) => {
    setData(dropData[value - 1]);
    setToggle(true);
  };

  const { img, title, brand, price, dec } = data;

  return (
    <Fragment>
      <ProductPopup
        open={toggle}
        close={() => setToggle(false)}
        img={img}
        title={title}
        brand={brand}
        price={price}
        dec={dec}
      />
      {/* Drops Section */}
      <section id="drop">
        <div className="container">
          {/* Main Title */}
          <div className="neoh_fn_title">
            <h3 className="fn_title">Example Outfits</h3>
            <div className="line">
              <span />
            </div>
          </div>
          {/* !Main Title */}
          {/* Drops List */}
          <div className="neoh_fn_drops">
            <ul>
              <li>
                <div
                  className="item"
                  data-modal-image="https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12731915_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg"
                  data-modal-title="Article #1"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://images.bloomingdalesassets.com/is/image/BLM/products/5/optimized/12731915_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg" alt="Image 1" />
                    <a className="full_link" onClick={() => onClick(1)} />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(1)}>Slim-Fit Suit</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12809728_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg"
                  data-modal-title="Article #2"
                  data-modal-description="Outfit Description"
                  data-modal-opensea-url=""
                  data-modal-discord-url="#"
                >
                  <div className="img_holder">
                    <img src="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12809728_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg" alt="Image 2" />
                    <a onClick={() => onClick(2)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(2)}>Blue Dress Shirt</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12302659_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg"
                  data-modal-title="Neoh #4586"
                  data-modal-description="Outfit Description"
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://images.bloomingdalesassets.com/is/image/BLM/products/8/optimized/12302659_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg" alt="" />
                    <a onClick={() => onClick(3)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(3)}>Tan Slacks</a>
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div
                  className="item"
                  data-modal-image="https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/11660637_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg"
                  data-modal-title="Article #4"
                  data-modal-description="Suspendisse eu velit est. Cras nec vestibulum quam. Donec tincidunt purus nec enim tincidunt, sit amet facilisis massa laoreet. Integer mollis nec sapien eu lacinia."
                  data-modal-opensea-url="#"
                  data-modal-discord-url=""
                >
                  <div className="img_holder">
                    <img src="https://images.bloomingdalesassets.com/is/image/BLM/products/6/optimized/11660637_fpx.tif?wid=300&qlt=100,0&layer=comp&op_sharpen=0&resMode=bilin&op_usm=0.7,1.0,0.5,0&fmt=jpeg&4msn=.jpg" alt="" />
                    <a onClick={() => onClick(4)} className="full_link" />
                  </div>
                  <div className="title_holder">
                    <h3 className="fn_title">
                      <a onClick={() => onClick(4)}>Brown Dress Shoes</a>
                    </h3>
                  </div>
                </div>
              </li> 
            </ul>
            {/* Clearfix */}
            <div className="clearfix" />
          </div>
          {/* !Drops List */}
        </div>
      </section>
      {/* !Drops Section */}
    </Fragment>
  );
};
export default Drops;
