import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Nav } from './components/nav/nav.component';

// const routes: Routes = [
// { path: 'first-component', component: FirstComponent },
// { path: 'second-component', component: SecondComponent },
// ];

const routes = [{ path: '', component: Nav }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
