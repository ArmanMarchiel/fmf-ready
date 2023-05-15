import Link from "next/link";
const AboutComponent = () => {
  return (
    <section id="about">
      <div className="container">
        {/* About Item #1 */}
        <div className="neoh_fn_about_item">
          <div className="img_item">
            <img src="img/about/jacket3.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Redefine your Style</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              Say goodbye to the clothes your mom picked out! 
              Take a new approach to styling your wardrobe by combing fashion trends with 
              cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </div>
        {/* !About Item #1 */}
        {/* About Item #2 */}
        <div className="neoh_fn_about_item reverse">
          <div className="img_item">
            <img src="img/about/hoodie2.png" alt="" />
          </div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">Customized Approach</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>
              We believe that everyone's personality should be uniquely reflected in their choice of apparel. 
              Our AI Model collects data from the user qualitative survey and curates custom tailored outfits for any occasion.
              </p>
            </div>
            <div className="buttons">
              <Link href="/about">
                <a className="neoh_fn_button only_text">
                  <span className="text">More About US</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
        {/* !About Item #2 */}
      </div>
    </section>
  );
};
export default AboutComponent;
