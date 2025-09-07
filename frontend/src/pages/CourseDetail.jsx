import CourseInfo from "../component/courseInfo";
import NavbarComp from "../Navbar";
function CourseDetails() {
  return (
    <div>
      <NavbarComp />
      <div className="container mt-5">
        <CourseInfo />
      </div>
    </div>
  );
}

export default CourseDetails;
