import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";

import * as CoursesSelectors from "./courses.selectors";
import * as CoursesActions from "./courses.actions";
import { CoursesState } from "./courses.reducer";

@Injectable({
  providedIn: "root",
})
export class CoursesStateFacade {
  constructor(private store: Store) {}

  isAllCoursesLoading$: Observable<boolean> = this.store.pipe(
    select(CoursesSelectors.isAllCoursesLoadingSelector)
  );
  isSingleCourseLoading$: Observable<boolean> = this.store.pipe(
    select(CoursesSelectors.isSingleCourseLoadingSelector)
  );

  isSearchingState$: Observable<boolean> = this.store.pipe(
    select(CoursesSelectors.isSearchingStateSelector)
  );

  courses$: Observable<any[]> = this.store.pipe(
    select(CoursesSelectors.getCourses)
  );

  allCourses$: Observable<any[]> = this.store.pipe(
    select(CoursesSelectors.getAllCourses)
  );

  course$: Observable<any> = this.store.pipe(
    select(CoursesSelectors.getCourse)
  );

  errorMessage$: Observable<string | null> = this.store.pipe(
    select(CoursesSelectors.getErrorMessage)
  );

  getAllCourses(): void {
    this.store.dispatch(CoursesActions.requestAllCourses());
  }

  getSingleCourse(id: number): void {
    this.store.dispatch(CoursesActions.requestSingleCourse({ id }));
  }

  getFilteredCourses(searchValue: string): void {
    this.store.dispatch(
      CoursesActions.requestFilteredCourses({ title: searchValue })
    );
  }

  editCourse(body: any, id: number): void {
    this.store.dispatch(CoursesActions.requestEditCourse({ course: body, id }));
  }

  createCourse(body: any): void {
    this.store.dispatch(CoursesActions.requestCreateCourse({ course: body }));
  }

  deleteCourse(id: number): void {
    this.store.dispatch(CoursesActions.requestDeleteCourse({ id }));
  }
}
