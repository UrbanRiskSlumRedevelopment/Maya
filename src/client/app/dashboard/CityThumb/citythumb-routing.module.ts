import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CityThumbComponent } from './citythumb.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'city', component: CityThumbComponent }
    ])
  ],
  exports: [RouterModule]
})
export class CityRoutingModule { }
