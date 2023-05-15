import Link from "next/link";
const ServicesComponent = () => {
  return (
    <section id="services">
      {/* Dividers */}
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider top_divider"
      />
      <img
        src="svg/divider.svg"
        alt=""
        className="fn__svg fn__divider bottom_divider"
      />
      {/* !Dividers */}
      <div className="container">
        {/* Main Title */}
        <div className="neoh_fn_title">
          <h3 className="fn_title">How does Finish My Fit work?</h3>
          <div className="line">
            <span />
          </div>
        </div>
        {/* !Main Title */}
        {/* Services */}
        <div className="neoh_fn_services">
          <ul>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>Step 1</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Open the Outfit Generator</h3>
                  <p className="fn_desc fn_animated_text">
                    Head over to our outfit generator to craft endless outfits. Click the button below to get started.
                  </p>
                  <div className="buttons">
                    <Link href="/blog">
                      <a className="neoh_fn_button only_text">
                        <span className="text">Generator</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>Step 2</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Enter an Occasion</h3>
                  <p className="fn_desc fn_animated_text">
                    In the provided textbox, describe an occasion that you would like an outfit for. 
                    Please select other inputs, such as gender, for a more tailored output.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>Step 3</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Click Generate Outfit</h3>
                  <p className="fn_desc fn_animated_text">
                    Once you have entered your desired inputs, your outfits are just one click away! Take a look at your results.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="item">
                <div className="item_num">
                  <span>Step 4</span>
                </div>
                <div className="item_content">
                  <h3 className="fn_title">Perfect your Result</h3>
                  <p className="fn_desc fn_animated_text">
                    Be part of a community of neoh owners and create user
                    generated items. Rent, advertise, lounch stores, create
                    items.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* !Services */}
      </div>
    </section>
  );
};
export default ServicesComponent;
