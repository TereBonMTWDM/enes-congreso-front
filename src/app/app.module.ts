import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './modules/material/material.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EjesComponent } from './pages/ejes/ejes.component';
import { SectionsModule } from './sections/sections.module';
import { ProgramaComponent } from './pages/programa/programa.component';
import { ComiteComponent } from './pages/comite/comite.component';
import { PresentadoresComponent } from './pages/presentadores/presentadores.component';
import { GuanajuatoComponent } from './pages/guanajuato/guanajuato.component';
import { ConferenciasComponent } from './pages/presentadores/conferencias/conferencias.component';
import { OrganizadorComponent } from './pages/comite/organizador/organizador.component';
import { CientificoComponent } from './pages/comite/cientifico/cientifico.component';
import { VirtualComponent } from './pages/programa/virtual/virtual.component';
import { TecnicoComponent } from './pages/comite/tecnico/tecnico.component';
import { PonenciasComponent } from './pages/presentadores/ponencias/ponencias.component';
import { EnesComponent } from './pages/enes/enes.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ParticipacionComponent } from './pages/programa/participacion/participacion.component';
import { FechasComponent } from './pages/programa/fechas/fechas.component';
//import { OrganizadorSectionComponent } from './pages/comite/organizador-section/organizador-section.component';
//import { ConfCronoComponent } from './pages/presentadores/conf-crono/conf-crono.component';
import { SintesisModalsComponent } from './shared/sintesis-modals/sintesis-modals.component';
import { EjesModalsComponent } from './shared/ejes-modals/ejes-modals.component';
import { Mesa17Component } from './pages/programa/mesa17/mesa17.component';
import { Mesa18Component } from './pages/programa/mesa18/mesa18.component';
import { Mesa19Component } from './pages/programa/mesa19/mesa19.component';
import { EquidadComponent } from './pages/programa/equidad/equidad.component';
import { InnComponent } from './pages/programa/inn/inn.component';
import { ProcesosComponent } from './pages/programa/procesos/procesos.component';
import { InvestigacionComponent } from './pages/programa/investigacion/investigacion.component';
import { PoliticasComponent } from './pages/programa/politicas/politicas.component';
import { EvaluacionComponent } from './pages/programa/evaluacion/evaluacion.component';
import { CulturaComponent } from './pages/programa/cultura/cultura.component';
import { CriteriosComponent } from './pages/registro/criterios/criterios.component';
import { InscripcionComponent } from './pages/registro/inscripcion/inscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    EjesComponent,
    ProgramaComponent,
    ComiteComponent,
    PresentadoresComponent,
    GuanajuatoComponent,
    ConferenciasComponent,
    OrganizadorComponent,
    CientificoComponent,
    VirtualComponent,
    TecnicoComponent,
    PonenciasComponent,
    EnesComponent,
    RegistroComponent,
    ParticipacionComponent,
    FechasComponent,
    //OrganizadorSectionComponent,
    //ConfCronoComponent,
    SintesisModalsComponent,
    EjesModalsComponent,
    Mesa17Component,
    Mesa18Component,
    Mesa19Component,
    EquidadComponent,
    InnComponent,
    ProcesosComponent,
    InvestigacionComponent,
    PoliticasComponent,
    EvaluacionComponent,
    CulturaComponent,
    CriteriosComponent,
    InscripcionComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
