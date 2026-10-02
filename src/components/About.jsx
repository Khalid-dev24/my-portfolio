import React from "react";

function About() {
    return (
        <section className="about" id="about">
            <div className="about-me" data-reveal>
                <div className="about-meta">
                    <p className="section-eyebrow">How I work</p>
                    <p className="about-index">End-to-end / 01</p>
                </div>
                <div className="about-copy">
                    <h2>Full-stack engineering.<br /><span>AI, where it adds value.</span></h2>
                    <p>
                        From frontend interfaces to backend systems and AI integrations, I build software around the people and workflows it serves. My experience spans different industries, so I adapt each solution to the problem instead of reaching for the same answer every time.
                    </p>
                </div>
            </div>
        </section>
    );
}


export default About;