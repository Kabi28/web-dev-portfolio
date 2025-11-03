import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="portfolio">
      <div className="hero" id="home">
        <div className="nav">
          <h1>KABILAN</h1>
          <div className="nav-list">
            <ul className={`${show ? "active" : "inactive"}`}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#certificates">Certifications</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <img
            src="/hamburger.svg"
            alt="open"
            className="hamb"
            onClick={() => setShow(!show)}
          />
        </div>
        <div className="port-container">
          <div className="text-content">
            <p>Hello ,</p>
            <h1>
              I am <span>KABILAN ,</span>
              <br />
              React Web Developer
            </h1>
            <a href="/kabilan-resume.pdf" download="kabilan-resume.pdf">
              <button>Download CV</button>
            </a>
          </div>
          <div className="img-content">
            <img src="/load.png" alt="" />
          </div>
        </div>
      </div>
      <div className="about" id="about">
        <h1 className="about-h1">About Me :</h1>
        <div className="about-img">
          <img src="/future_of_work_concept_illustration.jpg" alt="" />
        </div>
        <div className="about-text">
          <p>
            I’m a passionate Front-End Developer with a strong foundation in
            HTML, CSS, JavaScript, and React. I love turning ideas into
            interactive, user-friendly web experiences that are both visually
            appealing and performance-driven. My focus is on writing clean,
            maintainable code and crafting responsive designs that work
            seamlessly across all devices. I enjoy solving real-world problems
            through modern web technologies and continuously learning to stay
            ahead of the curve. Whether it’s building dynamic components,
            optimizing app performance, or integrating APIs, I approach every
            project with creativity, precision, and a keen attention to detail.
            Beyond coding, I value collaboration, design thinking, and
            delivering products that make a meaningful impact. My goal is to
            grow as a developer by contributing to innovative projects and
            creating digital experiences that leave a lasting impression.
          </p>
        </div>
      </div>
      <div className="projects" id="projects">
        <h1>Projects :</h1>
        <div className="project-wrap">
          <div className="project-item">
            <img src="/img1.png" alt="" />
            <h2>YouTube Clone</h2>
            <a
              href="https://youtube-clone-lyart-seven.vercel.app/"
              target="_blank"
            >
              https://youtube-clone-lyart-seven.vercel.app/
            </a>
            <p>
              This is a responsive YouTube clone web application featuring a
              sleek, modern interface with a sidebar menu, search functionality,
              and a dynamic video grid layout. It replicates YouTube’s design,
              showcasing video thumbnails, titles, and channel details while
              demonstrating strong front-end development skills, responsive
              styling, and user-friendly navigation.
            </p>
          </div>

          <div className="project-item">
            <img src="/img2.png" alt="" />
            <h2>E-Commerce Menwear</h2>
            <a href="https://main-app1.vercel.app/" target="_blank">
              https://main-app1.vercel.app/
            </a>
            <p>
              This is a responsive YouTube clone web application featuring a
              sleek, modern interface with a sidebar menu, search functionality,
              and a dynamic video grid layout. It replicates YouTube’s design,
              showcasing video thumbnails, titles, and channel details while
              demonstrating strong front-end development skills, responsive
              styling, and user-friendly navigation.
            </p>
          </div>

          <div className="project-item">
            <img src="/img3.png" alt="" />
            <h2>Weather App</h2>
            <a href="https://weather-app-woad-tau.vercel.app/" target="_blank">
              https://weather-app-woad-tau.vercel.app/
            </a>
            <p>
              This is a responsive YouTube clone web application featuring a
              sleek, modern interface with a sidebar menu, search functionality,
              and a dynamic video grid layout. It replicates YouTube’s design,
              showcasing video thumbnails, titles, and channel details while
              demonstrating strong front-end development skills, responsive
              styling, and user-friendly navigation.
            </p>
          </div>
        </div>
      </div>
      <div className="certifications" id="certificates">
        <h1 id="cert">Certifications :</h1>
        <img src="/pro2.jpeg" alt="" />
        <img src="/pro1.jpeg" alt="" />
      </div>
      <div className="contact" id="contact">
        <h1>Contact Me :</h1>
        <div className="contact-img">
          <img src="/20943705.jpg" alt="" />
        </div>
        <div className="contact-text">
          <div className="contact-item">
            <img src="/mail.svg" alt="" />
            <p>vskabilan2004@gmail.com</p>
          </div>
          <div className="contact-item">
            <img src="/linkedin.svg" alt="" />
            <p>kabilanv</p>
          </div>
          <div className="contact-item">
            <img src="/mobile.svg" alt="" />
            <p>+91 8098428593</p>
          </div>
          <div className="contact-item">
            <img src="/instagram.svg" alt="" />
            <p>iam_kabilanv</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>This is my Personal Portfolio</p>
      </div>
    </div>
  );
}

export default App;
