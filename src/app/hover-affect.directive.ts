import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hoverAffect]'
})
export class HoverAffectDirective {

  @Input('hoverAffect') styleProperty: string;
  private originalBorderStyle : string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.originalBorderStyle = elementRef.nativeElement.style.border;
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle(this.styleProperty, true);
    this.elementRef.nativeElement.style.border = '2px solid black';
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyStyle(this.styleProperty, false);
    this.elementRef.nativeElement.style.border = this.originalBorderStyle;
    this.elementRef.nativeElement.style.backgroundColor = this.originalBorderStyle;
  }

  private applyStyle(property: string, value: boolean) {
    this.renderer.setStyle(this.elementRef.nativeElement, property, value ? this.getStyleValue(property) : null);
  }

  private getStyleValue(property: string): string {
    switch (property) {
      case 'text-decoration':
        return 'underline';
      case 'font-weight':
        return 'bold';
      case 'border':
        return '2px solid #000';
      default:
        return '';
    }
  }
}