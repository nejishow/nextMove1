import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './navigation/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { ServiceComponent } from './components/service/service.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },

  { path: 'signUp', component: SignUpComponent },
  { path: 'signIn', component: SignInComponent },

  { path: 'service/:name', component: ServiceComponent, runGuardsAndResolvers: 'always',
},
  { path: '**', redirectTo: 'dashboard' }
];
export const COMPONENTS = [
  HeaderComponent, DashboardComponent, FooterComponent,
  ServiceComponent, SignInComponent, SignUpComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
