import * as CoursesActions from "./courses.actions";
import { CoursesConstants } from "./courses.constants";

describe("Courses Actions", () => {
  it("should create requestAllCourses action", () => {
    const action = CoursesActions.requestAllCourses();
    expect(action.type).toBe(CoursesConstants.REQUEST_ALL_COURSES);
  });
});
