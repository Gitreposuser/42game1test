import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Game1Component } from './game1/game1.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'game1', component: Game1Component},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }