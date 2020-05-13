import { Directive, Input, Output, EventEmitter, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
})
export class ClickOutsideDirective implements OnInit {

  @Output() clickOutside = new EventEmitter<void>();


  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {

  }

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
      const clickedInside = this.elementRef.nativeElement.contains(target);
      if (!clickedInside) {
        this.clickOutside.emit();
      }

  }
}
