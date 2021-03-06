import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

//Our components:
import { InicioComponent } from './pages/inicio/inicio.component';
import { EjesComponent } from './pages/ejes/ejes.component';
import { ProgramaComponent } from './pages/programa/programa.component';
import { ComiteComponent } from './pages/comite/comite.component';
import { PresentadoresComponent } from './pages/presentadores/presentadores.component';
import { GuanajuatoComponent } from './pages/guanajuato/guanajuato.component';
import { OrganizadorComponent } from './pages/comite/organizador/organizador.component';
import { CientificoComponent } from './pages/comite/cientifico/cientifico.component';
import { TecnicoComponent } from './pages/comite/tecnico/tecnico.component';
import { ConferenciasComponent } from './pages/presentadores/conferencias/conferencias.component';
import { PonenciasComponent } from './pages/presentadores/ponencias/ponencias.component';
import { EnesComponent } from './pages/enes/enes.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { Mesa17Component } from './pages/programa/mesa17/mesa17.component';
import { Mesa18Component } from './pages/programa/mesa18/mesa18.component';
import { Mesa19Component } from './pages/programa/mesa19/mesa19.component';
import { EquidadComponent } from './pages/programa/equidad/equidad.component';
import { InnComponent } from './pages/programa/inn/inn.component';
import { CulturaComponent } from './pages/programa/cultura/cultura.component';
import { EvaluacionComponent } from './pages/programa/evaluacion/evaluacion.component';
import { InvestigacionComponent } from './pages/programa/investigacion/investigacion.component';
import { ParticipacionComponent } from './pages/programa/participacion/participacion.component';
import { PoliticasComponent } from './pages/programa/politicas/politicas.component';
import { ProcesosComponent } from './pages/programa/procesos/procesos.component';
import { CriteriosComponent } from './pages/registro/criterios/criterios.component';
import { InscripcionComponent } from './pages/registro/inscripcion/inscripcion.component';

const routes: Routes =[
    { path: 'inicio',           component: InicioComponent },
    { path: 'conferencias',     component: ConferenciasComponent },
    { path: 'ponencias',     component: PonenciasComponent },
    { path: 'organizador',      component: OrganizadorComponent },
    { path: 'cientifico',       component: CientificoComponent },
    { path: 'tecnico',          component: TecnicoComponent },
    { path: 'ejes',             component: EjesComponent },
    
    { path: 'programa',         component: ProgramaComponent },
    { path: 'registro',         component: RegistroComponent },
    { path: 'comite',           component: ComiteComponent },
    { path: 'presentadores',    component: PresentadoresComponent },
    { path: 'enes',             component: EnesComponent },
    { path: 'guanajuato',       component: GuanajuatoComponent },

    { path: 'mesa17',       component: Mesa17Component },
    { path: 'mesa18',       component: Mesa18Component },
    { path: 'mesa19',       component: Mesa19Component },

    { path: 'equidad',       component: EquidadComponent },
    { path: 'inn',       component: InnComponent },
    { path: 'cultura',       component: CulturaComponent },
    { path: 'evaluacion',       component: EvaluacionComponent },
    { path: 'investigacion',       component: InvestigacionComponent },
    { path: 'participacion',       component: ParticipacionComponent },
    { path: 'politicas',       component: PoliticasComponent },
    { path: 'procesos',       component: ProcesosComponent },

    { path: 'criterios',       component: CriteriosComponent },
    { path: 'inscripcion',       component: InscripcionComponent },

    //{ path: '', redirectTo: 'home', pathMatch: 'full' }
    { path: '', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64]
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
