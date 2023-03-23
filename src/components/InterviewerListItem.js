import classNames from "classnames";
import React from "react";
import "./InterviewerListItem.scss";

// REFRACTOR
export default function InterviewerListItem(props) {
  const interviewerClass = classNames("interviewers__item", { "interviewers__item--selected": props.selected });

  return (
    <li className={interviewerClass} onClick={props.setInterviewer}>
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}


// INTERVIEW ITEM w/ values w/ props, event handler, conditional scss & conditional rendering 
// export default function InterviewerListItem(props) {
//   const { id, name, avatar, selected, setInterviewer } = props;
// console.log("selected", selected);
// const handleClick = () => {
//   setInterviewer(id);
// };

// return (
//   <li className={`interviewers__item${selected ? '--selected' : ''}`} onClick={handleClick}>
//     <img
//       className="interviewers__item-image"
//       src={avatar}
//       alt={name}
//     />
//     {selected && name}
//   </li>
// );




