import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { AboutComponent } from './components/pages/about/about.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path:'', component: NavComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'page/cadastro', component: CadastroComponent},
    {path: 'page/about', component: AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
