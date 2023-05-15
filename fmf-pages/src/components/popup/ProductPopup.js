import { Fragment } from "react";

const ProductPopup = ({ open, close, img, title, brand, price, dec }) => {
  return (
    <Fragment>
      <div className={`neoh_fn_modal product_modal ${open ? "opened" : ""}`}>
        <div className="modal_in">
          <div className="modal_closer">
            <a onClick={() => close()}>
              <img src="svg/cancel.svg" alt="" className="fn__svg" />
            </a>
          </div>
          <div className="modal_content">
            <div className="neoh_fn_product_modal">
              <div className="img_item">
                <img src={img} alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">{title}</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>Brand: {brand}</p>
                  <p>Price: {price}</p>
                  <p>Article Description: {dec}</p>
                </div>
                <div className="buttons">
                  <a
                    href="https://opensea.io/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button opensea"
                  >
                    <span className="icon">
                      <img src="svg/opensea.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">Explore Item</span>
                  </a>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="neoh_fn_button discord disable"
                  >
                    <span className="icon">
                      <img src="svg/discord.svg" alt="" className="fn__svg" />
                    </span>
                    <span className="text">View on Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProductPopup;
