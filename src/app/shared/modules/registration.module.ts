import { RouterModule, Routes } from "@angular/router";
import { RegistrationFormComponent } from "../components";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: RegistrationFormComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class RegistrationModule {}
