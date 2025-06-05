import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="bgLayer"></div>
        <div className="container-fluid">
          <div className="insider row">
            <div className="imgSide col-lg-4 col-11">
              <div className="img">
                <img src="/images/me.webp" alt="personal picture" />
              </div>
            </div>
            <div className="textSide col-lg-5 col-11 row">
              <div className="textSideHead col-12">
                <h2>i'm ahmed elshennawy,</h2>
                <h5>front-end Devoloper (React)</h5>
              </div>
              <div className="textSideContent col-12">
                <p>
                  Junior Frontend Developer with a strong foundation in HTML,
                  CSS, JavaScript, and React. Experienced in building responsive
                  web applications and continuously learning new technologies.
                  Strong problem-solving skills, team collaboration experience,
                  and adaptability. Transitioned into tech with a passion for
                  creating user-friendly, visually appealing web experiences.
                </p>
              </div>
              <div className="contact col-12 row">
                <div className="contactHeader col-12">
                  <h3>contacts me :</h3>
                </div>
                <div className="socials col-12 row">
                  <span className="col-2 whatsapp">
                    <Link to={"https://wa.me/201033926177"} target="_blank">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </Link>
                  </span>
                  <span className="col-2 linkedin">
                    <Link
                      to={"https://www.linkedin.com/in/shennawyz"}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </span>
                  <span className="col-2 github">
                    <Link
                      to={"https://github.com/a-elshennawy"}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </Link>
                  </span>
                  <span className="col-2 instagram">
                    <Link
                      to={"https://www.instagram.com/shennawy.z"}
                      target="_blank"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                  </span>
                  <span className="col-2 gmail">
                    <a
                      href="mailto:ahmedshennawy997@gmail.com"
                      onClick={(e) => {
                        window.open(
                          "https://mail.google.com/mail/?view=cm&to=ahmedshennawy997@gmail.com",
                          "_blank"
                        );
                        e.preventDefault();
                      }}
                    >
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </span>
                </div>
              </div>

              <div className="cv col-10">
                <button className="cvBtn">
                  <Link
                    to={"/Ahmed-CV.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    preview CV
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
