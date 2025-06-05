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
                  <img src="/images/coffeeShop.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    a react app for a coffe shop as my graduation project using
                    local storage for log in and sign up and log out also to
                    save orders and reservations getting drinks and posts
                    through a local JSON files also fully responsive
                  </p>
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
                  <img src="/images/watchesShop.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    a react vite web app for a watches store in both arabic and
                    english and a protected CRUD system route connected to
                    database using firebase and OAuth authentication for admin
                    access and form submitting for orders and email notification
                    for each order made using Gmail API V1
                  </p>
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
                  <img src="/images/dayapp.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    basic HTML / CSS / JS a daily app getting live weather cast,
                    prayer times based on location, also additional quran app
                    and azkar also fully responsive across all screens
                  </p>
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
                  <img src="/images/gym.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    a basic and static gym webApp design i used basic HTML / CSS
                    wich is also fully responsive with some animations
                  </p>
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
                  <img src="/images/sshop.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    basic HTML / CSS / JS e-commerce website using local storage
                    for for log in and sign up and log out also to save orders
                    and checkout, using APIs to fetch random projects
                  </p>
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
                  <img src="/images/hurst.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    a landing page for a furniture shop using basic HTML / CSS
                    and bootstrap with some additional animations also fully
                    responsive
                  </p>
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
                  <img src="/images/confer.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    a landing page for a conferances event using basic HTML /
                    CSS and bootstrap with some additional animations also fully
                    responsive
                  </p>
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
                  <img src="/images/fixera.jpeg" alt="" />
                </div>
                <div className="details col-12">
                  <p>
                    a landing page for a tech shop using basic HTML / CSS and
                    bootstrap with some additional animations also fully
                    responsive
                  </p>
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
