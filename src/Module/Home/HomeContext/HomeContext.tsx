import "./HomeContext.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const HomeContext = () => {
  return (
    <div className="home-content">
      <h3>Hello, It's Me</h3>
      <h1>Son Nguyen</h1>
      <h3>
        And I'm a <span>Frontend Developer</span>
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
        alias vero! Doloribus impedit beatae tempora, dicta, placeat ullam et
        est eum cumque illum a corrupti saepe autem nulla culpa fugiat.
      </p>
      <div className="social-media">
        <a>
          <FacebookIcon className="facebook-icon" />
        </a>
        <a>
          <TwitterIcon className="twitter-icon" />
        </a>
        <a>
          <InstagramIcon className="instagram-icon" />
        </a>
        <a>
          <LinkedInIcon className="linkedin-icon" />
        </a>
      </div>
      <a href="#" className="btn">
        Download CV
      </a>
    </div>
  );
};

export default HomeContext;
