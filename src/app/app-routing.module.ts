import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompDynamicComponent } from './add-comp-dynamic/add-comp-dynamic.component';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { SubjectExampleComponent } from './subject-example/subject-example.component';

const routes: Routes = [
  { path: 'q1', component: MissingNumberComponent },
  { path: 'q3', component: AddCompDynamicComponent },
  { path: 'q4', component: SubjectExampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
