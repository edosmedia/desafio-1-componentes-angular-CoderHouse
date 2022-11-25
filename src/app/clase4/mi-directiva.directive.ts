import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiDirectiva]',
})
export class MiDirectivaDirective {
  constructor(
    private elemento: ElementRef,
    private  rendere : Renderer2
    ) {
      rendere.setStyle(elemento.nativeElement, 'color', 'blue')
    }
}
