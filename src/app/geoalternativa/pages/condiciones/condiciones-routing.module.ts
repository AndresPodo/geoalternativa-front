import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondicionesGrlsPageComponent } from './condiciones-grls-page/condiciones-grls-page.component';
import { CondicionesDomesticoComponent } from './condiciones-domestico/condiciones-domestico.component';
import { CondicionesIndustrialComponent } from './condiciones-industrial/condiciones-industrial.component';

const routes: Routes = [
  {
    path: '',
    component: CondicionesGrlsPageComponent,
    children: [
      {
        path: '',
        redirectTo: 'domestico',
        pathMatch: 'full'
      },
      {
        path: 'domestico',
        component: CondicionesDomesticoComponent
      },
      {
        path: 'industrial',
        component: CondicionesIndustrialComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CondicionesRoutingModule { }
