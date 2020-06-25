import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

//Our components:
import { InicioComponent } from './pages/inicio/inicio.component';
import { EjesComponent } from './pages/ejes/ejes.component';
import { Ejes2Component } from './pages/ejes2/ejes2.component';
import { EjeInnovacionComponent } from './pages/ejes/eje-innovacion/eje-innovacion.component';
import { EjeInvestigacionComponent } from './pages/ejes/eje-investigacion/eje-investigacion.component';
import { EjePoliticasComponent } from './pages/ejes/eje-politicas/eje-politicas.component';
import { ProgramaComponent } from './pages/programa/programa.component';
import { ComiteComponent } from './pages/comite/comite.component';
import { PresentadoresComponent } from './pages/presentadores/presentadores.component';
import { GuanajuatoComponent } from './pages/guanajuato/guanajuato.component';
import { OrganizadorComponent } from './pages/comite/organizador/organizador.component';
import { CientificoComponent } from './pages/comite/cientifico/cientifico.component';
import { EjeEquidadComponent } from './pages/ejes/eje-equidad/eje-equidad.component';
import { EjeProcesosComponent } from './pages/ejes/eje-procesos/eje-procesos.component';
import { EjeEvaluacionComponent } from './pages/ejes/eje-evaluacion/eje-evaluacion.component';
import { TecnicoComponent } from './pages/comite/tecnico/tecnico.component';
import { ConferenciasComponent } from './pages/presentadores/conferencias/conferencias.component';
import { PonenciasComponent } from './pages/presentadores/ponencias/ponencias.component';
import { EnesComponent } from './pages/enes/enes.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',         component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'login',            component: LoginComponent },

    { path: 'inicio',           component: InicioComponent },
    { path: 'conferencias',     component: ConferenciasComponent },
    { path: 'ponencias',     component: PonenciasComponent },
    { path: 'organizador',      component: OrganizadorComponent },
    { path: 'cientifico',       component: CientificoComponent },
    { path: 'tecnico',          component: TecnicoComponent },
    { path: 'ejes',             component: EjesComponent },
    //{ path: 'ejes2',            component: Ejes2Component },
    { path: 'eje/innovacion',   component: EjeInnovacionComponent },
    { path: 'eje/investigacion',component: EjeInvestigacionComponent },
    { path: 'eje/politica',     component: EjePoliticasComponent },
    { path: 'eje/equidad',      component: EjeEquidadComponent },
    { path: 'eje/procesos',     component: EjeProcesosComponent },
    { path: 'eje/evaluacion',   component: EjeEvaluacionComponent },
    
    { path: 'programa',         component: ProgramaComponent },
    { path: 'registro',         component: RegistroComponent },
    { path: 'comite',           component: ComiteComponent },
    { path: 'presentadores',    component: PresentadoresComponent },
    { path: 'enes',       component: EnesComponent },
    { path: 'guanajuato',       component: GuanajuatoComponent },

    //{ path: '', redirectTo: 'home', pathMatch: 'full' }
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
