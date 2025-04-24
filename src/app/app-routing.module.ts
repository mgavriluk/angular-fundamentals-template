import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./shared/modules/login.module").then((m) => m.LoginModule),
  },
  {
    path: "registration",
    loadChildren: () =>
      import("./shared/modules/registration.module").then(
        (m) => m.RegistrationModule
      ),
  },
  {
    path: "courses",
    loadChildren: () =>
      import("./shared/modules/courses.module").then((m) => m.CoursesModule),
  },
  {
    path: "courses/add",
    loadChildren: () =>
      import("./shared/modules/add-course.module").then(
        (m) => m.AddCourseModule
      ),
  },
  {
    path: "courses/:id",
    loadChildren: () =>
      import("./shared/modules/show-course.module").then(
        (m) => m.ShowCourseModule
      ),
  },
  {
    path: "courses/edit/:id",
    loadChildren: () =>
      import("./shared/modules/edit-course.module").then(
        (m) => m.EditCourseModule
      ),
  },
  {
    path: "",
    redirectTo: "/courses",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "/courses",
  },
];
