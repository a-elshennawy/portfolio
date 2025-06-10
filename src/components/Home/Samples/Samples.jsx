import { Link } from "react-router-dom";
export default function Samples() {
  return (
    <>
      <div className="samples">
        <div className="bgLayer"></div>
        <div className="container-fluid">
          <div className="samplesInner row">
            <div className="samplesHeader col-lg-12 col-10">
              <h2>- work samples -</h2>
            </div>
            <div className="fullWebApps col-10 col-lg-12 row">
              <div className="fullHeader col-12">
                <h3>- full web apps -</h3>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/coffeeShop.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>butter coffee-shop</h3>
                  <button className="goBtn">
                    <Link
                      to={"https://butter-react.netlify.app/"}
                      target="_blank"
                    >
                      check demo
                    </Link>
                  </button>
                  <button className="payBtn">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      get template
                    </Link>
                  </button>
                </div>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/watchesShop.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>elsokarya for watches</h3>
                  <button className="goBtn">
                    <Link to={"https://elsokarya.net/"} target="_blank">
                      live webApp
                    </Link>
                  </button>
                  <button className="payBtn">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      get template
                    </Link>
                  </button>
                </div>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/dayapp.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>daily app</h3>
                  <button className="goBtn">
                    <Link
                      to={"https://dailyguide.netlify.app/"}
                      target="_blank"
                    >
                      check demo
                    </Link>
                  </button>
                </div>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/gym.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>gladiator gym</h3>
                  <button className="goBtn">
                    <Link
                      to={"https://gladiator-gym-psi.vercel.app/"}
                      target="_blank"
                    >
                      check demo
                    </Link>
                  </button>
                  <button className="payBtn">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      get template
                    </Link>
                  </button>
                </div>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/sshop.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>SShop</h3>
                  <button className="goBtn">
                    <Link to={"https://e-sshop.netlify.app/"} target="_blank">
                      check demo
                    </Link>
                  </button>
                  <button className="payBtn">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      get template
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="landingPages col-10 col-lg-12 row">
              <div className="landingHeader col-12">
                <h3>- landing pages -</h3>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/hurst.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>hurst furniture</h3>
                  <button className="goBtn">
                    <Link to={"https://hurstf.netlify.app/"} target="_blank">
                      check demo
                    </Link>
                  </button>
                  <button className="payBtn">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      get template
                    </Link>
                  </button>
                </div>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/confer.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>confer</h3>
                  <button className="goBtn">
                    <Link
                      to={"https://confertest.netlify.app/"}
                      target="_blank"
                    >
                      check demo
                    </Link>
                  </button>
                  <button className="payBtn">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      get template
                    </Link>
                  </button>
                </div>
              </div>
              <div className="appCard col-lg-3 col-12 row">
                <div className="img col-12">
                  <img src="/images/fixera.webp" alt="" loading="lazy" />
                </div>
                <div className="details col-12">
                  <h3>fixera tech-shop</h3>
                  <button className="goBtn">
                    <Link to={"https://fixera.netlify.app/"} target="_blank">
                      check demo
                    </Link>
                  </button>
                  <button className="payBtn">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      get template
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
