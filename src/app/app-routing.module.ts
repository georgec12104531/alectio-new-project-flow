import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Nav } from './components/nav/nav.component';
import { NewProject } from './pages/new-project/new-project.component';

const routes = [
  { path: '', component: Nav },
  { path: 'home', component: Nav },
  { path: 'new-project', component: NewProject },
  { path: 'all-projects', component: Nav },
  { path: 'archives', component: Nav },
  { path: 'workflow', component: Nav },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
