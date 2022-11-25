import React from "react";

import Navbar from "./components/Navbar";
import FeaturedCard from "./components/FeaturedCard";
import NewCard from "./components/NewCard";

import imgWeb3Desktop from "./assets/images/image-web-3-desktop.jpg";
import imgWeb3Mobile from "./assets/images/image-web-3-mobile.jpg";

import { whatsNew, featured } from "./data";

const App = () => (
  <div className="App">
    <Navbar />
    <main>
      <section className="grid--main-section | grid container">
        <article className="flow">
          <picture>
            <source srcSet={imgWeb3Desktop} media="(min-width: 376px)" />
            <img src={imgWeb3Mobile} alt="" />
          </picture>
          <div className="grid--two-columns | grid">
            <h1 className="fs-900 fw-extra-bold text-neutral-800">
              The Bright Future of Web 3.0?
            </h1>
            <div className="flow">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="cta">Read More</button>
            </div>
          </div>
        </article>
        <article className="article--new">
          <h1 className="fs-800 fw-bold text-primary-400">New</h1>
          {whatsNew.map((n) => {
            const { id } = n;
            return <NewCard key={id} {...n} />;
          })}
        </article>
      </section>

      <section className="grid--three-columns | grid container">
        {featured.map((featured) => {
          const { id } = featured;
          return <FeaturedCard key={id} {...featured} />;
        })}
      </section>
    </main>
  </div>
);

export default App;
