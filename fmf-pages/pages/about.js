import Layout from "../src/layout/Layout";
import PageBanner from "../src/layout/PageBanner";

const About = () => {
  return (
    <Layout pageName={"About Us"}>
      <PageBanner pageName={"About"} />
      <div className="neoh_fn_aboutpage">
        {/* Information Section */}
        <section id="information">
          <div className="container">
            {/* About Item #1 */}
            <div className="neoh_fn_about_item">
              <div className="img_item">
                <img src="img/about/hoodie2.png" alt="" />
              </div>
              <div className="content_item">
                <div className="neoh_fn_title" data-align="left">
                  <h3 className="fn_title">Our Mission</h3>
                  <div className="line">
                    <span />
                  </div>
                </div>
                <div className="desc">
                  <p>
                    Optimizing fashion choices, by providing you with a customized shopping experience!
                  </p>
                </div>
              </div>
            </div>
            {/* !About Item #1 */}
            {/* Guarantee List */}
            <div className="neoh_fn_gualist">
              <ul>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img
                      src="svg/search-engine.svg"
                      alt=""
                      className="fn__svg"
                    />
                    <h3 className="fn_title">Innovation</h3>
                    <p className="fn_desc fn_animated_text">
                      Morbi non dignissim erat, a blandit felis. Suspendisse nec
                      lorem vel orci varius congue ut vitae est.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/management.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Accessibility</h3>
                    <p className="fn_desc fn_animated_text">
                      Morbi non dignissim erat, a blandit felis. Suspendisse nec
                      lorem vel orci varius congue ut vitae est.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <span className="line" />
                    <img src="svg/padlock.svg" alt="" className="fn__svg" />
                    <h3 className="fn_title">Growth</h3>
                    <p className="fn_desc fn_animated_text">
                      Morbi non dignissim erat, a blandit felis. Suspendisse nec
                      lorem vel orci varius congue ut vitae est.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Guarantee List */}
          </div>
        </section>
        {/* !Information Section */}
        {/* Video Section */}
        <section id="video">
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
          {/* Video Shortcode */}
          <div className="neoh_fn_video">
            <div className="bg_overlay">
              <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
              <div className="bg_color" />
            </div>
            <div className="v_content">
              <a
                className="popup-youtube"
                href="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              >
                <img src="svg/play.svg" alt="" className="fn__svg" />
              </a>
            </div>
          </div>
          {/* !Video Shortcode */}
        </section>
        {/* !Video Section */}
        {/* Team Section */}
        <section id="team">
          <div className="container">
            {/* Main Title */}
            <div className="neoh_fn_title">
              <h3 className="fn_title">Our Team</h3>
              <div className="line">
                <span />
              </div>
            </div>
            {/* !Main Title */}
            <div className="mw_650 fn_description">
              <p className="fn_desc fn_animated_text">
                The idea was created by team of UC Berkeley students - with backgrounds in data science, economics, and computer science.
              </p>
            </div>
            {/* Team List Shortcode */}
            <div className="neoh_fn_team">
              <ul className="team_list">
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/arman-prof-image.jpeg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Arman Marchiel</h3>
                        <p className="fn_desc">Co-Founder</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/arman-marchiel-482997166" target="_blank">
                            <i className="fn-icon-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-email" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/max-prof-image.jpeg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Friedrich Burk</h3>
                        <p className="fn_desc">Co-Founder</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-email" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="team_item">
                  <div className="t_item">
                    <div className="person_info">
                      <div className="img_holder">
                        <img src="img/author/connor-prof-image.jpg" alt="" />
                      </div>
                      <div className="title_holder">
                        <h3 className="fn_title">Connor Bernard</h3>
                        <p className="fn_desc">Founding Engineer</p>
                      </div>
                    </div>
                    <div className="person_social">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fn-icon-linkedin" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fn-icon-email" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* !Team List Shortcode */}
          </div>
        </section>
        {/* !Team Section */}
      </div>
    </Layout>
  );
};
export default About;
