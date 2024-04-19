import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CondicionesGrlsPageComponent } from './pages/condiciones/condiciones-grls-page/condiciones-grls-page.component';
import { AvisoLegalPageComponent } from './pages/aviso-legal-page/aviso-legal-page.component';
import { PoliticaPrivPageComponent } from './pages/politica-priv-page/politica-priv-page.component';
import { CookiesPageComponent } from './pages/cookies-page/cookies-page.component';
import { PromocionesPageComponent } from './pages/promociones-page/promociones-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: '',
        component: DashboardPageComponent,
        pathMatch: 'full',
      },
      {
        path: 'contrato',
        loadChildren: () => import('./pages/condiciones/condiciones.module').then(m => m.CondicionesModule)
      },
      {
        path: 'aviso-legal',
        component: AvisoLegalPageComponent
      },
      {
        path: 'politica-privacidad',
        component: PoliticaPrivPageComponent
      },
      {
        path: 'cookies',
        component: CookiesPageComponent
      },
      {
        path: 'promociones',
        component: PromocionesPageComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeoalternativaRoutingModule { }
