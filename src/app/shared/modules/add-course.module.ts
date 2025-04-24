import { RouterModule, Routes } from "@angular/router";
import { CourseFormComponent } from "../components";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: CourseFormComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class AddCourseModule {}
