import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { Hero } from "../Hero";
@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
    heores: Hero[];
    ngOnInit(): void {
        this.heroService.getTopHeroes()
            .then(heroesResponse => this.heores = heroesResponse)
    }

    constructor(private heroService: HeroService) {
    }

}