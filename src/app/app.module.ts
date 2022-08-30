import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { LogosARGComponent } from './components/logos-arg/logos-arg.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperiencialaboralComponent } from './components/experiencialaboral/experiencialaboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HardysoftComponent } from './components/hardysoft/hardysoft.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component'
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperecienciaComponent } from './components/experiencialaboral/new-expereciencia.component';
import { EditExperienciaComponent } from './components/experiencialaboral/edit-experiencia.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { EditacercadeComponent } from './components/acerca-de/editacercade.component';
import { NewhardsoftComponent } from './components/hardysoft/newhardsoft.component';
import { EdithardsoftComponent } from './components/hardysoft/edithardsoft.component';
import { NewproyectoComponent } from './components/proyecto/newproyecto.component';
import { EditproyectoComponent } from './components/proyecto/editproyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogosARGComponent,
    AcercaDeComponent,
    ExperiencialaboralComponent,
    EducacionComponent,
    HardysoftComponent,
    ProyectoComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperecienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditacercadeComponent,
    NewhardsoftComponent,
    EdithardsoftComponent,
    NewproyectoComponent,
    EditproyectoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
