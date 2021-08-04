import React from "react";
import "bulma/css/bulma.css";

const Header = () => {
  return (
    <section className="hero is-fluid is-info is-small">
      <div className="hero-body">
        <div className="container has-text-centered s-divider">
          <h1 className="title">World Ranking Top 20</h1>
        </div>
      </div>
    </section>
  );
};

export default Header;