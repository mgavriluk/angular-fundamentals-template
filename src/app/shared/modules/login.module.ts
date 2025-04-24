import { RouterModule, Routes } from "@angular/router";
import { LoginFormComponent } from "../components";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared.module";

const routes: Routes = [{ path: "", component: LoginFormComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
