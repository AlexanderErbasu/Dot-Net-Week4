import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent} from "./dashboard/dashboard.component"
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './Hero-detail/hero-detail.component';
import { HeroService } from "./hero.service";

import { HeroListComponent } from "./hero-list/hero-list.component";

const routes: Routes = [
    {
        path: "heroes",
        component: HeroListComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent
    },
    {
        path: "hero/:id",
        component: HeroDetailComponent
    },
    {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: 'full'
    },
]
@NgModule({
  imports:      [ BrowserModule, FormsModule , RouterModule.forRoot(routes)],
  declarations: [AppComponent, HeroDetailComponent, HeroListComponent, DashboardComponent ],
  bootstrap: [AppComponent],
  providers : [HeroService]
})
export class AppModule { }
