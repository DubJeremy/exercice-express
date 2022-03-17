import PropTypes from "prop-types";
import { Fragment } from "react";
const Skills = ({ skills }) => {
  return (
    <div>
      {skills.map((item) => (
        <Fragment key={item._id}>
          <span
            key={item._id}
          >
            <span>#{item.title}</span>
            {item.votes && (
              <span>
                {item.votes}
              </span>
            )}
          </span>
        </Fragment>
      ))}
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      votes: PropTypes.number,
    })
  ),
};
export default Skills;
