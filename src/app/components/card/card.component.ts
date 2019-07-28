import { Component, Input } from '@angular/core';
import { Album } from '../../+state/music-search/interfaces/music-search.interfaces';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: [ './card.component.scss' ]
})
export class CardComponent {
    @Input()
    album: Album;
}
