import React from "react";
import { Modal } from "react-bootstrap";

const ProjectModal = ({
  show,
  handleClose,
  userInput,
  setUserInput,
  handleForm1Submit,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg" animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Add Projects</Modal.Title>
      </Modal.Header>
      <form
        onSubmit={handleForm1Submit}
        className="pt-4 d-flex gap-4 flex-column"
        style={{ color: "#8F8F8F", fontSize: "18px" }}
      >
        <div
          style={{ marginLeft: "55px" }}
          className="form-row justify-content-start d-flex gap-4 "
        >
          {/*Project Name */}
          <div
            className="form-group col-10"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Project Name">Project Name</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: E-commerce Website"
              value={userInput.projectName}
              onChange={(e) =>
                setUserInput({ ...userInput, projectName: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
        </div>

        <div className="form-row justify-content-center d-flex gap-4 ">
          {/* Associated with */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Associated with">Associated with</label>
            <input
              type="text"
              className="form-control  "
              placeholder="Ex: ABC Private Limited"
              value={userInput.associatedWith}
              onChange={(e) =>
                setUserInput({ ...userInput, associatedWith: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
          {/*Project Type*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Project Type">Project Type</label>
            <input
              type="text"
              id="project-type"
              className="form-control  "
              placeholder="Ex: web development"
              value={userInput.projectType}
              onChange={(e) =>
                setUserInput({ ...userInput, projectType: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
        </div>

        {/* Date */}
        <div className="form-row justify-content-center align-items-center d-flex gap-4">
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Start Date">Start Date</label>
            <input
              type="Date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.startDate}
              onChange={(e) =>
                setUserInput({ ...userInput, startDate: e.target.value })
              }
              required
            />
          </div>

          {/* Currently working in this Project*/}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor=""></label>
            <input
              onChange={(e) =>
                setUserInput({ ...userInput, isWorking: e.target.value })
              }
              className="form-check-input"
              type="checkbox"
              id="flexCheckDefault"
            />
            <label
              style={{ color: "black", marginLeft: "5px" }}
              className="form-check-label"
              for="flexCheckDefault"
            >
              Currently working in this Project
            </label>
          </div>
        </div>
        <div className="form-row justify-content-center d-flex gap-4 ">
          {/* End Date */}
          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="End Date">End Date</label>
            <input
              type="Date"
              className="form-control  "
              id="date"
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              value={userInput.endDate}
              onChange={(e) =>
                setUserInput({ ...userInput, endDate: e.target.value })
              }
              required
            />
          </div>

          <div
            className="form-group col-5"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Project Link">Project Link</label>
            <input
              type="text"
              className="form-control  "
              value={userInput.projectLink}
              onChange={(e) =>
                setUserInput({ ...userInput, projectLink: e.target.value })
              }
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
              }}
              required
            />
          </div>
        </div>

        {/* Description*/}
        <div
          style={{ marginLeft: "55px" }}
          className="form-row justify-content-start d-flex gap-4 "
        >
          <div
            className="form-group col-10"
            style={{ position: "relative", zIndex: "1" }}
          >
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control  "
              style={{
                backgroundColor: "#F3F3F3",
                color: "#858585",
                fontSize: "18px",
                padding: "10px 20px",
                marginBottom: "10px",
              }}
              value={userInput.description}
              onChange={(e) =>
                setUserInput({ ...userInput, description: e.target.value })
              }
              name=""
              id=""
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
        </div>

        {/* Skills*/}
        <div className="form-row justify-content-center d-flex gap-4 ">
          <div
            className="form-group col-10"
            style={{
              position: "relative",
              zIndex: "1",
              marginBottom: "10px",
            }}
          >
            <label htmlFor="Skills">Skills</label>
            <p style={{ color: "black", fontSize: "18px" }}>
              Earn upto 5 skill badges by getting verified from your verifier.
            </p>
            <div className="d-flex">
              <input
                type="text"
                className="form-control  "
                placeholder="Ex: HTML, CSS"
                // value={skill}
                // onChange={(e) => setSkill(e.target.value)}
                style={{
                  backgroundColor: "#F3F3F3",
                  color: "#858585",
                  fontSize: "18px",
                  width: "250px",
                }}
              />
              {/* <button
                style={{
                  backgroundColor: "#F3F3F3",
                  color: "#EB7C49",
                  fontWeight: "500",
                }}
                className="btn"
              >
                Add Skills
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.1534 7.34826H6.87941V11.52C6.87941 11.7413 6.78935 11.9535 6.62904 12.11C6.46874 12.2664 6.25132 12.3544 6.02461 12.3544C5.7979 12.3544 5.58048 12.2664 5.42017 12.11C5.25987 11.9535 5.16981 11.7413 5.16981 11.52V7.34826H0.895815C0.669108 7.34826 0.451687 7.26035 0.291381 7.10388C0.131075 6.94741 0.0410156 6.73519 0.0410156 6.51391C0.0410156 6.29262 0.131075 6.0804 0.291381 5.92393C0.451687 5.76746 0.669108 5.67956 0.895815 5.67956H5.16981V1.50781C5.16981 1.28653 5.25987 1.07431 5.42017 0.917837C5.58048 0.761366 5.7979 0.673462 6.02461 0.673462C6.25132 0.673462 6.46874 0.761366 6.62904 0.917837C6.78935 1.07431 6.87941 1.28653 6.87941 1.50781V5.67956H11.1534C11.3801 5.67956 11.5975 5.76746 11.7578 5.92393C11.9181 6.0804 12.0082 6.29262 12.0082 6.51391C12.0082 6.73519 11.9181 6.94741 11.7578 7.10388C11.5975 7.26035 11.3801 7.34826 11.1534 7.34826Z"
                    fill="url(#paint0_linear_78_680)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_78_680"
                      x1="5.92091"
                      y1="0.609342"
                      x2="5.92091"
                      y2="14.8114"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#EB7C49" />
                      <stop offset="1" stop-color="#F04F52" />
                    </linearGradient>
                  </defs>
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        <Modal.Footer>
          <button
            type="submit"
            className=" d-flex flex-row btn justify-content-center align-items-center gap-2"
            style={{
              color: "white",

              background:
                "linear-gradient(180deg, #EB7C49 -0.55%, #F04F52 121.03%)",
              border: "none",

              maxWidth: "250px",
              fontSize: "14px",
            }}
          >
            Get Verified
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.61959 0.669742L0.995908 2.27969C0.623187 2.44535 0.379883 2.81807 0.379883 3.22703V5.66007C0.379883 8.53313 2.36773 11.2198 5.0389 11.8721C7.71007 11.2198 9.69792 8.53313 9.69792 5.66007V3.22703C9.69792 2.81807 9.45461 2.44535 9.08189 2.27969L5.45821 0.669742C5.1942 0.550678 4.8836 0.550678 4.61959 0.669742ZM3.63602 8.39853L2.29526 7.05777C2.24733 7.00985 2.20931 6.95295 2.18337 6.89033C2.15744 6.82771 2.14409 6.76059 2.14409 6.69282C2.14409 6.62504 2.15744 6.55792 2.18337 6.4953C2.20931 6.43268 2.24733 6.37579 2.29526 6.32786C2.34318 6.27993 2.40008 6.24192 2.4627 6.21598C2.52532 6.19004 2.59243 6.17669 2.66021 6.17669C2.72799 6.17669 2.79511 6.19004 2.85773 6.21598C2.92035 6.24192 2.97724 6.27993 3.02517 6.32786L4.00356 7.30108L7.04745 4.25719C7.09538 4.20926 7.15228 4.17124 7.2149 4.1453C7.27752 4.11937 7.34463 4.10602 7.41241 4.10602C7.48019 4.10602 7.5473 4.11937 7.60992 4.1453C7.67254 4.17124 7.72944 4.20926 7.77737 4.25719C7.82529 4.30511 7.86331 4.36201 7.88925 4.42463C7.91519 4.48725 7.92854 4.55436 7.92854 4.62214C7.92854 4.68992 7.91519 4.75704 7.88925 4.81965C7.86331 4.88227 7.82529 4.93917 7.77737 4.9871L4.36593 8.39853C4.31804 8.44652 4.26115 8.4846 4.19853 8.51058C4.13591 8.53655 4.06877 8.54992 4.00097 8.54992C3.93318 8.54992 3.86604 8.53655 3.80342 8.51058C3.7408 8.4846 3.68391 8.44652 3.63602 8.39853Z"
                fill="white"
              />
            </svg>
          </button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default ProjectModal;
