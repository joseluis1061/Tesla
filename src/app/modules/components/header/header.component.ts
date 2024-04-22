import { AfterViewInit, Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('header', {static: false}) header!: ElementRef;
  @ViewChild('btnMenu', {static: false}) btnMenu!: ElementRef;

  optionIntersectionObserver = {
    root: null,
    threshhold: 1,
    rootMargin: '0px'
  }
  constructor(
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    this.createObserver();
  }

  createObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    const observer = new IntersectionObserver(this.handleIntersect.bind(this), options);
    const sections = document.querySelectorAll("section");

    sections.forEach( section => {
      observer.observe(section)
    })
  }

  handleIntersect(entries: any, observer:any) {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        const color = entry.target.getAttribute("data-header-color");
        this.header.nativeElement.style.color = color;
        const bgColor = entry.target.getAttribute("data-menuBtn-bg");
        let rgbColor = this.hexToRgb(bgColor);

        if(bgColor === 'black'){
          this.renderer.setStyle(this.btnMenu.nativeElement, 'background', 'rgba(0,0,0,0.2)');
        }else{
          this.renderer.setStyle(this.btnMenu.nativeElement, 'background', bgColor);
        }


      }
      // else {
      //   console.log('El elemento está fuera de la vista');
      // }
    });
  }

  hexToRgb(hex: string) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }



}
