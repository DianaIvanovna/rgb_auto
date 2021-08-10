import React from "react";
import "./SitemapPage.scss";

const solutions = {
    text: "Solutions",
    link: null,
    ul: [
        {
            text: "Advanced Driver Assistance Systems (ADAS)",
            link: "./",
            ul: [
                {
                    text: "Mobileye",
                    link: null,
                    ul: [
                        {
                            text: "Mobileye 8 Connect",
                            link: "./",
                            ul: null,
                        },
                        {
                            text: "Mobileye Shield+",
                            link: "./",
                            ul: null,
                        },
                    ],
                },
            ],
        },
        {
            text: "Driver monitoring Systems (DMS)",
            link: null,
            ul: [
                {
                    text: "Cipia",
                    link: null,
                    ul: [
                        {
                            text: "Fleet Sense FS10 ",
                            link: "./",
                            ul: null,
                        },
                    ],
                },
                {
                    text: "GreenRoad",
                    link: null,
                    ul: [
                        {
                            text: "Videosense™",
                            link: "./",
                            ul: null,
                        },
                    ],
                },
                {
                    text: "MiX Telematics ",
                    link: null,
                    ul: [
                        {
                            text: "MiX Vision ll",
                            link: "./",
                            ul: null,
                        },
                    ],
                },
            ],
        },
    ],
};
const products = {
    text: "Products",
    link: null,
    ul: [
        {
            text: "Cipia",
            link: "./",
            ul: [
                {
                    text: "Fleet Sense FS10 ",
                    link: null,
                    ul: null,
                },
            ],
        },
        {
            text: "Cloud-Wise",
            link: null,
            ul: [
                {
                    text: "	I-Sticker ",
                    link: null,
                    ul: null,
                },
            ],
        },
        {
            text: "Geotab",
            link: null,
            ul: [
                {
                    text: "GO9",
                    link: null,
                    ul: null,
                },
            ],
        },
        {
            text: "GreenRoad",
            link: null,
            ul: [
                {
                    text: "Drive™",
                    link: null,
                    ul: null,
                },
            ],
        },
        {
            text: "Ituran",
            link: null,
            ul: [
                {
                    text: "StarLink",
                    link: null,
                    ul: null,
                },
            ],
        },
        {
            text: "MiX Telematics ",
            link: null,
            ul: [
                {
                    text: "MyMiX Tracking™ ",
                    link: null,
                    ul: null,
                },
                {
                    text: "MiX Fleet Manager™ ",
                    link: null,
                    ul: null,
                },
                {
                    text: "MiX Vision ll ",
                    link: null,
                    ul: null,
                },
            ],
        },
        {
            text: "Mobileye",
            link: null,
            ul: [
                {
                    text: "Mobileye 8 Connect  ",
                    link: null,
                    ul: null,
                },
                {
                    text: "Mobileye Shield+ ",
                    link: null,
                    ul: null,
                },
            ],
        },
    ],
};

const SitemapPage = () => {
    return (
        <div className="sitemap-page back">
            <div className="component">
                <h1 className="title title--light mb_40">Site map</h1>
                <div className="sitemap-page__container">
                    {
                        <div className="sitemap-page__column">
                            <h2 className="title--h2 title__line  title--light">{solutions.text}</h2>

                            {solutions.ul
                                ? solutions.ul.map((level2, index) => (
                                      <ul className="sitemap-page__list" key={index}>
                                          <li className="sitemap-page__li">
                                              {level2.link ? (
                                                  <a href={level2.link} className="title--small title--light">
                                                      {level2.text}
                                                  </a>
                                              ) : (
                                                  <p className="title--small title--light">{level2.text}</p>
                                              )}

                                              {level2.ul
                                                  ? level2.ul.map((level3, index) => (
                                                        <ul className="sitemap-page__list sitemap-page__list--level-two" key={index}>
                                                            <li className="sitemap-page__li--level-two">
                                                                {level3.link ? <a href={level3.link}>{level3.text}</a> : <p>{level3.text}</p>}

                                                                {level3.ul
                                                                    ? level3.ul.map((level4, index) => (
                                                                          <ul className="sitemap-page__list sitemap-page__list--level-three" key={index}>
                                                                              <li className="sitemap-page__li--level-three">{level4.text}</li>
                                                                          </ul>
                                                                      ))
                                                                    : null}
                                                            </li>
                                                        </ul>
                                                    ))
                                                  : null}
                                          </li>
                                      </ul>
                                  ))
                                : null}
                        </div>
                    }
                    {
                        <div className="sitemap-page__column">
                            <h2 className="title--h2 title__line title--light">{products.text}</h2>

                            {products.ul
                                ? products.ul.map((level2, index) => (
                                      <ul className="sitemap-page__list" key={index}>
                                          <li className="sitemap-page__li">
                                              {level2.link ? (
                                                  <a href={level2.link} className="title--small title--light">
                                                      {level2.text}
                                                  </a>
                                              ) : (
                                                  <p className="title--small title--light">{level2.text}</p>
                                              )}

                                              {level2.ul
                                                  ? level2.ul.map((level3, index) => (
                                                        <ul className="sitemap-page__list sitemap-page__list--level-two" key={index}>
                                                            <li className="sitemap-page__li--level-two">
                                                                {level3.link ? <a href={level3.link}>{level3.text}</a> : <p>{level3.text}</p>}

                                                                {level3.ul
                                                                    ? level3.ul.map((level4, index) => (
                                                                          <ul className="sitemap-page__list sitemap-page__list--level-three" key={index}>
                                                                              <li className="sitemap-page__li--level-three">{level4.text}</li>
                                                                          </ul>
                                                                      ))
                                                                    : null}
                                                            </li>
                                                        </ul>
                                                    ))
                                                  : null}
                                          </li>
                                      </ul>
                                  ))
                                : null}
                        </div>
                    }
                    <div className="sitemap-page__column sitemap-page__column--second">
                        <a href="./" className="title--h2 title__line title--light mb_40">
                            DEMO
                        </a>
                        <a href="./" className="title--h2 title__line title--light mb_40">
                            About
                        </a>
                        <a href="./" className="title--h2 title__line title--light mb_40">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SitemapPage;
