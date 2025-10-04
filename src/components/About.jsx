import React from 'react'
import './css/about.css'
const About = () => {
  return (
    <div className='about-container'>
      <h1>About This Project</h1>

      {/* Introduction */}
      <section>
        <h2>🌍 Introduction</h2>
        <p>
          This platform was created to make Pakistan’s key economic and social
          data accessible to everyone in a simple and visual way. By combining
          official World Bank data with interactive charts, we aim to transform
          complex statistics into insights that matter for daily life.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h2>🎯 Mission</h2>
        <p>
          Our mission is to empower students, researchers, journalists, and
          everyday citizens with reliable information about Pakistan’s economy,
          trade, poverty, education, and more. With easy-to-understand visuals,
          anyone can explore the numbers that shape our society.
        </p>
      </section>

      {/* Data Source */}
      <section>
        <h2>📊 Data Source</h2>
        <p>
          All data is sourced directly from the{" "}
          <a
            href="https://data.worldbank.org/"
            target="_blank"
            rel="noreferrer"
          >
            World Bank Open Data API
          </a>
          , ensuring accuracy, reliability, and transparency.
        </p>
      </section>

      {/* Features */}
      <section>
        <h2>⚡ Features</h2>
        <ul>
          <li>Live statistics of Pakistan updated from World Bank</li>
          <li>Interactive charts (line, bar) for better insights</li>
          <li>Comparison with other countries</li>
          <li>Simple explanations for each indicator</li>
          {/* <li>FAQs to answer common questions</li> */}
        </ul>
      </section>

      {/* How to Use */}
      <section>
        <h2>🖥️ How to Use</h2>
        <p>
          Navigate through sections like Trade, Education, Economy, and Poverty
          using the menu. Each section includes a short explanation, data
          charts, and country comparisons so you can explore Pakistan’s progress
          in detail.
        </p>
      </section>

      {/* Who Can Benefit */}
      <section>
        <h2>👥 Who Can Benefit?</h2>
        <ul>
          <li>Students and researchers studying Pakistan’s economy</li>
          <li>Journalists and policy analysts seeking reliable stats</li>
          <li>Citizens curious about poverty, education, and trade</li>
        </ul>
      </section>

      {/* Future Plans */}
      <section>
        <h2>🚀 Future Plans</h2>
        <p>
          Planned improvements include adding more datasets, building a
          mobile-friendly dashboard, and providing AI-powered insights to make
          the data even more valuable.
        </p>
      </section>

      {/* Developer Info */}
      <section>
        <h2>👨‍💻 Developer</h2>
        <p>
          This project is developed by <a href='https://huraira-arshad-abbasi.vercel.app/' target='_blank'>Huraira Arshad Abbasi</a>, a
          MERN stack developer passionate about  building impactful digital tools.
        </p>
      </section>
    </div>
  )
}

export default About
