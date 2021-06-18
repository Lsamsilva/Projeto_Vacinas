import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SobrePageComponent } from './components/sobre-page/sobre-page.component';
import { VacinasPageComponent } from './components/vacinas-page/vacinas-page.component';
import { MenuTemplateComponent } from './menu-template/menu-template.component';

const routes: Routes = [{

  path: '',
  component: MenuTemplateComponent,
  children:[
    {
      path: '',
      component: HomePageComponent
    },
    {
      path: 'sobre',
      component: SobrePageComponent
    },
    {
      path: 'vacinas',
      component: VacinasPageComponent
    }
  ] 


}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
