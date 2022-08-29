import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExperienciaComponent } from './components/experiencialaboral/edit-experiencia.component';
import { NewExperecienciaComponent } from './components/experiencialaboral/new-expereciencia.component';
import { EdithardsoftComponent } from './components/hardysoft/edithardsoft.component';
import { NewhardsoftComponent } from './components/hardysoft/newhardsoft.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'editacerca/:id', component: EditacercadeComponent },
  { path: 'nuevaexp', component: NewExperecienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NeweducacionComponent },
  { path: 'editedu/:id', component: EditeducacionComponent },
  { path: 'nuevahs', component: NewhardsoftComponent},
  { path: 'ediths/:id', component: EdithardsoftComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
