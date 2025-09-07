import Course from "../models/course.js";

export const createCourse = async (req, res) => {
  try {
    const course = new Course(req.body);
    course.owner = req.user._id;
    await course.save();
    res.status(201).json({
      data: course,
      message: "new course created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    if (!courses) {
      return res
        .status(200)
        .json({ message: "Courses not found", success: false });
    }
    res.status(200).json({
      data: courses,
      message: "courses successfully loaded",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res
        .status(200)
        .json({ message: "Course not found", success: false });
    }
    res.status(200).json({
      data: course,
      message: "course detail successfully loaded",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const updateCourse = async (req, res) => {
  try {
    console.log(req.body);
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res
        .status(200)
        .json({ message: "Course not found", success: false });
    }
    res.status(200).json({
      message: "course successfully updated",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res
        .status(200)
        .json({ message: "Course not found", success: false });
    }
    res
      .status(200)
      .json({ message: "course successfully deleted", success: true });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};
