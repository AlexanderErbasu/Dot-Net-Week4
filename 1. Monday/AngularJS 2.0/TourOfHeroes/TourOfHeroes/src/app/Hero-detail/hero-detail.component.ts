import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero'; 

import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'hero-detail',
    templateUrl:'./hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit{

    constructor(
        private route: ActivatedRoute,
        private location: Location
    ) { }

}