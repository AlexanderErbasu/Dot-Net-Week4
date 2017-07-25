import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Router } from "@angular/router";

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.components.css'],
})
export class HeroListComponent implements OnInit {
    constructor(private heroService: HeroService, private router: Router) {
    }

    title: string;
    selectedHero: Hero;
    heroes: Hero[];

    ngOnInit(): void {
        this.title = 'Tour of Heroes';
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .then(heroesPromised => this.heroes = heroesPromised);
    }

    goToHeroDetail(hero: Hero): void {
        this.router.navigate(['/hero',hero.id])
    }
}