import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-fluid">
          <div className="footerInner">
            <p>
              designed by&nbsp;
              <Link
                to={"https://www.linkedin.com/in/shennawyz"}
                target="_blank"
              >
                Ahmed El-Shennawy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
