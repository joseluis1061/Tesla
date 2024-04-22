import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('header', {static: false}) header!: ElementRef;

  optionIntersectionObserver = {
    root: null,
    threshhold: 1,
    rootMargin: '0px'
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
        //console.log('El elemento está en la vista', color);
      }
      // else {
      //   console.log('El elemento está fuera de la vista');
      // }
    });
  }


  /*
  observerScroll(){
    const obs = new IntersectionObserver( entries => {
      entries.forEach( entry => {
        const { isIntersecting } = entry;
        if(isIntersecting){
          const color = entry.target.getAttribute("data-header-color");
          this.header.nativeElement.style.color = color
        }
      })
    }, this.optionIntersectionObserver)


    const sections = document.querySelectorAll("section");
    sections.forEach( section => {
      obs.observe(section)
    })
  }
  */

}
