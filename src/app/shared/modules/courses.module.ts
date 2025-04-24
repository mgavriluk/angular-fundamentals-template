import { RouterModule, Routes } from "@angular/router";
import { CourseCardComponent } from "../components";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: CourseCardComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class CoursesModule {}
