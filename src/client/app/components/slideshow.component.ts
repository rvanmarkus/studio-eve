import { Component, Input, AfterViewInit, ViewChild, ElementRef} from 'angular2/core';
import { SlideShowItem } from '../shared/slideshow-item.interface';
@Component({
	selector: 'slide-show',
	templateUrl : 'app/components/slideshow.component.html',
	styles: [`.carousel-cell {
  width: 100%; /* full width */
  display: block;
  overflow:hidden;
  margin-right: 10px;
}
`]
})

export class SlideshowComponent  implements AfterViewInit {
	@Input() slides : SlideShowItem[];
    @ViewChild('carousel') carousel : ElementRef;
    flickityCarousel : Flickity;
	ngAfterViewInit () {
        this.flickityCarousel = new Flickity(this.carousel.nativeElement, {
            // options
              cellAlign: 'left',
                contain: false,
                autoPlay: true
            });
	}
}
