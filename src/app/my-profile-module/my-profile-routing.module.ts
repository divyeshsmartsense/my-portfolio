import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PersonalInformationComponent} from "./my-profile/personal-information/personal-information.component";
import {EducationComponent} from "./my-profile/education/education.component";
import {ProjectsComponent} from "./my-profile/projects/projects.component";
import {SkillsComponent} from "./my-profile/skills/skills.component";

const routes: Routes = [
  {path:'personal-information' , component:PersonalInformationComponent},
  {path:'education' , component:EducationComponent},
  {path:'projects' , component:ProjectsComponent},
  {path:'skills' , component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
