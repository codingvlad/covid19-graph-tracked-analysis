import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapViewComponent } from './navigation/pages/hello/map-view.component';


const routes: Routes = [
  {
    path: 'hello',
    component: MapViewComponent,
  },
  { path: '', component: MapViewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
