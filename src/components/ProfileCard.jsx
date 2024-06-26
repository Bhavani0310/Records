import greentick from "../assets/svg/greenTick.svg";
import edit from "../assets/svg/editIcon.svg";
import link from "../assets/svg/link.svg";
import defaultImage from "../assets/svg/noImage.svg";
const ProfileCard = ({
  name,
  field,
  description,
  startDate,
  endDate,
  verified,
  image,
  skills,
  duration,
  button,
  isEdit,
  data,
  handleEdit,
  url,
}) => {
  const handleEditdata = () => {
    handleEdit(data);
    isEdit(true);
  };
  return (
    <div
      className="my-4 row gx-2 rounded-4 p-4 border "
      style={{ position: "relative" }}
    >
      <div className="col-1">
        <img src={image || defaultImage} alt="institute logo" width={50} />
      </div>
      <div className="col-11">
        <img
          onClick={handleEditdata}
          src={edit}
          alt="edit"
          style={{
            position: "absolute",
            right: "15px",
            top: 15,
            cursor: "pointer",
            height: "20px",
            width: "20px",
          }}
          width={17}
          height={17}
        />
        <div className="d-flex flex-row  align-items-center gap-1">
          <h4 style={{ fontSize: "18px", fontWeight: "700" }}>{name} </h4>
          {verified && (
            <img src={greentick} alt="tick" width={20} height={20} />
          )}
        </div>
        <h5 style={{ color: "#444444", fontWeight: 400, fontSize: "16px" }}>
          {field}
        </h5>
        <p style={{ color: "#858585" }}>
          {startDate
            ? `${new Date(startDate).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })} -`
            : `Issued`}{" "}
          {endDate
            ? new Date(endDate).toLocaleString("default", {
                month: "long",
                year: "numeric",
              })
            : null}{" "}
          {duration && "| " + duration}
        </p>

        <div
          style={{
            flexWrap: "wrap",
          }}
          className="d-flex gap-2 mb-1"
        >
          {skills &&
            skills.map((skill, index) => {
              return (
                <button
                  style={{
                    background: "#F9F9F9",
                    color: "#929292",
                    border: "none",
                    borderRadius: "16px",
                    paddingBlock: "4px",
                    paddingInline: "12px",
                    fontWeight: "500",
                  }}
                  key={index}
                >
                  {skill.skillName}
                </button>
              );
            })}
        </div>
        <p style={{ fontWeight: 400, fontSize: "15px" }}>
          {description &&
            (description?.length < 200 ? description : description + "...")}
        </p>
      </div>
      <div className="d-flex justify-content-end">
        {button && (
          <button
            className="d-flex align-items-center gap-1 rounded-1 p-1"
            style={{
              fontSize: 12,
              fontWeight: 500,
              border: "1px solid #F04F52",
              background: "white",
            }}
          >
            <a href={url ? url : "#"}>
              {button} <img src={link} alt="link" width={15} />
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
