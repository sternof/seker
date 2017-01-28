import { Directive, ElementRef, Input,Renderer,OnInit,HostListener, } from '@angular/core';
@Directive({ selector: '[progressbar]' })
export class ProgressBarDirective  implements OnInit {
  private className:string;

  @Input('progressbar') progressValue: string;

  @Input('contextType') contextType: string;

  constructor(private el: ElementRef,private renderer: Renderer) {
  }

  ngOnInit() {

    this.el.nativeElement.style.width=this.progressValue+'%';

    if(this.contextType ==='1' )
      this.className = 'progress-bar-success';
    else if (this.contextType ==='2')
      this.className = 'progress-bar-info';
    else if (this.contextType ==='3')
      this.className = 'progress-bar-warning';
    else
      this.className = 'progress-bar-danger';

    this.renderer.setElementClass(this.el.nativeElement, this.className, true);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.title=this.progressValue;
  }

}