import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CondicionesRoutingModule } from './condiciones-routing.module';
import { CondicionesDomesticoComponent } from './condiciones-domestico/condiciones-domestico.component';
import { CondicionesIndustrialComponent } from './condiciones-industrial/condiciones-industrial.component';
import { CondicionesGrlsPageComponent } from './condiciones-grls-page/condiciones-grls-page.component';

import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    // CondicionesGrlsPageComponent,
    CondicionesDomesticoComponent,
    CondicionesIndustrialComponent
  ],
  imports: [
    CommonModule,
    CondicionesRoutingModule,
    ButtonModule,
  ]
})
export class CondicionesModule { }
