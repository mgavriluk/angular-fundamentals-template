import { Injectable } from "@angular/core";
import { mockedCoursesList } from "@app/shared/mocks/mocks";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  getAll(): Observable<any[]> {
    return of(mockedCoursesList);
  }

  createCourse(course: any) {
    // replace 'any' with the required interface
    // Add your code here
  }

  editCourse(id: string, course: any) {
    // replace 'any' with the required interface
    // Add your code here
  }

  getCourse(id: string) {
    // Add your code here
  }

  deleteCourse(id: string) {
    // Add your code here
  }

  filterCourses(value: string): Observable<any[]> {
    return of(
      mockedCoursesList.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  }

  getAllAuthors() {
    // Add your code here
  }

  createAuthor(name: string) {
    // Add your code here
  }

  getAuthorById(id: string) {
    // Add your code here
  }
}
