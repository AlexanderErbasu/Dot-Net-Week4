import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'hero-list',
    templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
    constructor(private heroService: HeroService) {
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
            .then(heroPromised => this.heroes = heroPromised);
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}