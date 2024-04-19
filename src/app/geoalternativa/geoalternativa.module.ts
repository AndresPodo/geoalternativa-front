import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeoalternativaRoutingModule } from './geoalternativa-routing.module';
import { AvisoLegalPageComponent } from './pages/aviso-legal-page/aviso-legal-page.component';
import { CondicionesGrlsPageComponent } from './pages/condiciones/condiciones-grls-page/condiciones-grls-page.component';
import { CookiesPageComponent } from './pages/cookies-page/cookies-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { PoliticaPrivPageComponent } from './pages/politica-priv-page/politica-priv-page.component';
import { PromocionesPageComponent } from './pages/promociones-page/promociones-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';



@NgModule({
  declarations: [
    LayoutPageComponent,
    CondicionesGrlsPageComponent,
    AvisoLegalPageComponent,
    PoliticaPrivPageComponent,
    CookiesPageComponent,
    PromocionesPageComponent,
    DashboardPageComponent,
  ],
  imports: [
    CommonModule,
    GeoalternativaRoutingModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
    // BrowserAnimationsModule
  ]
})
export class GeoalternativaModule { }
