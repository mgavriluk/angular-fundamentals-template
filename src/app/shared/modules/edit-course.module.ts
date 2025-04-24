import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CourseFormComponent } from "../components";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: CourseFormComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class EditCourseModule {}
