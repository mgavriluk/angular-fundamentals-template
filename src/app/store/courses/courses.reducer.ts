import { Action, createReducer, on } from "@ngrx/store";
import * as CourceActions from "./courses.actions";

// Add your code here
export const coursesFeatureKey = "courses";
export interface CoursesState {
  allCourses: any[]; // List of all courses
  course: any | null; // Single course details
  isAllCoursesLoading: boolean; // Loading state for all courses
  isSingleCourseLoading: boolean; // Loading state for a single course
  isSearchState: boolean; // Search state
  errorMessage: string | null; // Error message
}

export const initialState: CoursesState = {
  allCourses: [],
  course: null,
  isAllCoursesLoading: false,
  isSingleCourseLoading: false,
  isSearchState: false,
  errorMessage: null,
};

export const coursesReducer = createReducer(
  initialState,
  on(CourceActions.requestAllCourses, (state) => ({
    ...state,
    isAllCoursesLoading: true,
    errorMessage: null,
  }))
);

export const reducer = (state: CoursesState, action: Action): CoursesState =>
  coursesReducer(state, action);
