import {AfterViewInit, Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appIntString]'
})
export class IntStringDirective implements AfterViewInit {
  @Input() defaultValue = '1000000000000';
  @Input() maxLengthNum = 1000000000000;
  private oldValue: string;
  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.oldValue = this.elementRef.nativeElement.value;
  }

  @HostListener('input')
  inputChanged(): void {
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value.replace(/\D|^0\d*$/, '').slice(0, this.maxLengthNum);
    this.oldValue = /^\d+$/.test(this.elementRef.nativeElement.value) ? this.elementRef.nativeElement.value : '';
  }

  @HostListener('blur')
  onBlur(): void {
    this.elementRef.nativeElement.value = this.elementRef.nativeElement.value || this.defaultValue;
    this.oldValue = this.elementRef.nativeElement.value;
  }
}

