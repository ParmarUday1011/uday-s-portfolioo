import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Uday  MK Soft service</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              I worked as a Frontend Developer Intern at MK Soft Service for
              three months. During this internship, I worked on frontend web
              design using HTML, CSS, and Bootstrap. I built a complete company
              website that shared important information about the organization,
              including its services, production work, and overall activities.
              The website included different sections such as About Us,
              Services, Contact, and a photo gallery. This project helped me
              improve my skills in creating clean, well-structured, responsive,
              and userfriendly web pages.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
              
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built 2+ complete applications using React.js. Integrated backend
              authentication using firebase. Created responsive UI/UX.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Tops Technologies</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Completed Frontend Development training at Tops Technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
