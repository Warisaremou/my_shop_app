import React, { useState } from "react";

function About() {

  const [about, setAbout] = useState()

  return (
    <div id="about" className="section">
      <h1 className="section-title text-xl md:text-2xl uppercase">About me</h1>
      <h3 className="text-xl font-medium">Hi</h3>
      <p className="py-2 text-justify text-gray-600 dark:text-gray-300">
        Hi, I&#39;m Waris AKINOCHO, student in the third year of the IRT license (Computer Networks and
        Telecommunications) at ESGIS-Cotonou. Passionate about computing especially in frontend development and ui/ux design, I&#39;m open to freelance projects.
      </p>
    </div>
  );
}

export default About;
