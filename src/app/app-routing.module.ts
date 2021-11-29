import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component'
import { ListComponent } from './list/list.component'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { UpdateComponent } from './update/update.component'




const routes: Routes = [
  {
    component: AddComponent,
    path: 'add'
  },
  
  {
    component: LoginComponent,
    path: 'login'
  },
  {
    component: RegisterComponent,
    path: 'register'
  },
  {
    component: UpdateComponent,
    path: 'update/:id'
  },
  {
    component: ListComponent,
    path: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
