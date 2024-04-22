import { AfterViewInit, Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import {Dialog, DIALOG_DATA, DialogModule} from '@angular/cdk/dialog';
import { MenuMobileComponent } from '../menu-mobile/menu-mobile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements AfterViewInit{
  @ViewChild('header', {static: false}) header!: ElementRef;
  @ViewChild('btnMenu', {static: false}) btnMenu!: ElementRef;

  isOpen = false;

  optionIntersectionObserver = {
    root: null,
    threshhold: 1,
    rootMargin: '0px'
  }
  constructor(
    private renderer: Renderer2,
    public dialog: Dialog
  ) {}


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
        this.renderer.setStyle(this.header.nativeElement, 'color', color);
        const bgColor = entry.target.getAttribute("data-menuBtn-bg");
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

  openDialog() {
    const dialogRef = this.dialog.open(MenuMobileComponent, {
      minWidth: '300px',
      maxWidth : '50%',
      disableClose: true,
      autoFocus: false,
      data: {}
    });
    dialogRef.closed.subscribe(output => {
      console.log(output);
    })
  }

}
