import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "../components";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: InfoComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ShowCourseModule {}
