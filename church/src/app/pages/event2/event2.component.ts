import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './event2.component.html',  // Ensure the template path is correct
  styleUrls: ['./event2.component.scss']   // Ensure the style path is correct
})
export class Event2Component implements OnInit {
  images: string[] = [
    '/assets/IMG-20240626-WA0015.jpg',
    '/assets/IMG-20240626-WA0007.jpg',
    '/assets/IMG-20240626-WA0014.jpg',
    '/assets/IMG-20240626-WA0008 (1).jpg'
    // Add more image paths here
  ];
  currentIndex: number = 0;

  @ViewChild('carouselImages') carouselImages!: ElementRef<HTMLDivElement>;

  ngOnInit(): void {
    this.updateCarousel();
  }

  updateCarousel(): void {
    this.showCurrentImage();
  }

  showCurrentImage(): void {
    const images = this.carouselImages.nativeElement.children as HTMLCollectionOf<HTMLElement>;
    Array.from(images).forEach((img, index) => {
      img.style.display = index === this.currentIndex ? 'block' : 'none';
    });
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.images.length - 1;
    this.showCurrentImage();
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex < this.images.length - 1) ? this.currentIndex + 1 : 0;
    this.showCurrentImage();
  }
}

