import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloComponent } from './navigation/pages/hello/hello.component';


const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
  },
  { path: '', component: HelloComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
