import { Component } from '@angular/core';
import { MapService } from './map.service'

@Component({
    moduleId: module.id,
    selector: 'utp-map',
    providers: [MapService],
    //  services: [], chyba niepotrzebne, bo providers
    templateUrl: 'map.component.html',

})
export class ControlComponent {
    componentName: "ControlComponent"

    layers: any;

    // imports layers from map.service.ts when changes needed
    constructor(private MapService: MapService) {

        this.MapService.mapChangeEvent2.subscribe(layers => this.reloadLayers(layers));
    }

    // reloading layers
        // calling for updating layers; leaflet
        // when promise==good; calling for animations; leaflet
    private reloadLayers(layers: any): void {
        .then((layers: any) => {
            this.animate(layers: any)
        })
    }


}



//addEventListener(element: HTMLElement, eventName: string, handler: Function) : Function
//subscribe(generatorOrNext?: any, error?: any, complete?: any) : any