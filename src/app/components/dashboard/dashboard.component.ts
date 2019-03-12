import { Component, OnInit, ViewChild } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('slideshow') slideshow: any;
  imageUrls: (string | IImage)[] = [
    // tslint:disable-next-line:max-line-length
    { url: '../../../assets/image/logo/logo.png', caption: 'The first slide', href: '#config' },
    // tslint:disable-next-line:max-line-length
    { url: '../../../assets/image/logo/logo.png', clickAction: () => alert('custom click function') },
    // tslint:disable-next-line:max-line-length
    { url: '../../../assets/image/logo/logo.png', caption: 'Apple TV', href: 'https://www.apple.com/' },
    '../../../assets/image/logo/logo.png',
    { url: '../../../assets/image/logo/logo.png', backgroundSize: 'cover', backgroundPosition: 'center' }
  ];
  height = '400px';
  minHeight: string;
  arrowSize = '30px';
  showArrows = true;
  disableSwiping = false;
  autoPlay = true;
  autoPlayInterval = 3333;
  stopAutoPlayOnSlide = true;
  debug = false;
  backgroundSize = 'cover';
  backgroundPosition = 'center center';
  backgroundRepeat = 'no-repeat';
  showDots = true;
  dotColor = '#FFF';
  showCaptions = true;
  captionColor = '#FFF';
  captionBackground = 'rgba(0, 0, 0, .35)';
  lazyLoad = false;
  hideOnNoSlides = false;
  width = '100%';

  constructor() { }


  ngOnInit() {

  }

}
