import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState, coursesFeatureKey } from "./courses.reducer";

export const selectCoursesState =
  createFeatureSelector<CoursesState>(coursesFeatureKey);

export const isAllCoursesLoadingSelector = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.isAllCoursesLoading
);

export const isSearchingStateSelector = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.isSearchState
);

export const isSingleCourseLoadingSelector = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.isSingleCourseLoading
);

export const getAllCourses = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.allCourses
);

export const getCourse = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.course
);

export const getErrorMessage = createSelector(
  selectCoursesState,
  (state: CoursesState) => state.errorMessage
);

export const getCourses = getAllCourses;
