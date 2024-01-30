import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'documentos-legales',
    loadChildren: () => import('./geoalternativa/geoalternativa.module').then(m => m.GeoalternativaModule)
  },
  {
    path: '',
    redirectTo: 'documentos-legales',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
