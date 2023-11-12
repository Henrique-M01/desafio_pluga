import React from "react";
import { GrNext, GrPrevious } from "react-icons/gr";
import "../style/footer.css";

function Footer({page, setPage}) {
  return (
    <footer className="footer-box">
      <GrPrevious
        className="footer-previos"
        onClick={() => setPage(page-1)}
      />
        <div className="footer-card-box">
          <h1 className="footer-card-page">{page}</h1>
        </div>
      <GrNext
        className="footer-next"
        onClick={() => setPage(page+1)}
      />
    </footer>
  )
}

export default Footer;