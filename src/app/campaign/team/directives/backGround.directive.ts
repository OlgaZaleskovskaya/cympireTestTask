import { Directive, ElementRef, Renderer2, OnInit,  Input } from '@angular/core';

@Directive({
  selector: '[backGround]'
})

export class BackgroundDirective implements OnInit {
  content: ElementRef;
  @Input() status: string;
  @Input() element: number;

  class: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (+this.element == 1) {
      switch (this.status) {
        case "done":
          this.class = "done"
          break;
        case "in_progress":
          this.class = "inProgress"
          break;
        case "not_started":
          this.class = "notStarted"
          break;
        default: this.class = "else";
      }
    } else {
      switch (this.status) {
        case "done":
          this.class = "doneData"
          break;
        case "in_progress":
          this.class = "inProgressData"
          break;
        case "not_started":
          this.class = "notStartedData"
          break;
        default: this.class = "else";
      }
    }
    this.renderer.addClass(this.elementRef.nativeElement, this.class);
  }

}
