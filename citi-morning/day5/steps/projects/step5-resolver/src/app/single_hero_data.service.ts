import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { HeroesService } from "./heroes.service";
 
@Injectable()
export class SingleHeroDataService implements Resolve<any>{
    constructor(private hs:HeroesService){}
    resolve( route:ActivatedRouteSnapshot ){
        console.log(route);
        return this.hs.getSelectedHero(route.params['selectedHeroId'])
    }
}