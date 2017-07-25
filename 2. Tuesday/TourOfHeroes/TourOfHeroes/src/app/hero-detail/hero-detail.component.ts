import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detalil.component.css'],
})
export class HeroDetailComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private location: Location,
        private heroService: HeroService) {
    }

    selectedHero: Hero;
    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
            .subscribe(x => this.selectedHero = x);
    }

    goBack() : void {
      this.location.back();
    }

    save(): void {
        this.heroService.update(this.selectedHero)
            .then(() => this.goBack());
    }
}