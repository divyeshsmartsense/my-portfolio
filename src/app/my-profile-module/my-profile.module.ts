import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { PersonalInformationComponent } from './my-profile/personal-information/personal-information.component';
import { EducationComponent } from './my-profile/education/education.component';
import { ProjectsComponent } from './my-profile/projects/projects.component';
import { SkillsComponent } from './my-profile/skills/skills.component';
import {MyProfileRoutingModule} from "./my-profile-routing.module";

@NgModule({
  declarations: [
      PersonalInformationComponent,
      EducationComponent,
      ProjectsComponent,
      SkillsComponent,
      MyProfileComponent
      ],
  imports: [
      CommonModule,
      MyProfileRoutingModule
  ],
    exports:[MyProfileComponent]
})
export class MyProfileModule { }
