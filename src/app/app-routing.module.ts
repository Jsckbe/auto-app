import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAutoComponent } from './components/add-auto/add-auto.component';
import { ListAutoComponent } from './components/list-auto/list-auto.component';

const routes: Routes = [
  {path: 'listAuto', component: ListAutoComponent},
  {path: 'addAuto', component: AddAutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
