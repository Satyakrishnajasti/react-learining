import PropTypes from "prop-types";

interface Student {
  name: string;
  age: number;
  isStudent: boolean;
}

export function Student({
  name = "Guest",
  age = 0,
  isStudent = false,
}: Student) {
  return (
    <div className={name ? "student" : ""}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Y" : "N"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
