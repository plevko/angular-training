import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appEmojiAdder]',
})
export class EmojiAdderDirective implements AfterViewInit {
  @Input('emoji') emoji!: string;

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    const newTextContent = ((
      this.elementRef.nativeElement as HTMLElement
    ).innerHTML += this.emoji);

    this.renderer.setProperty(
      this.elementRef.nativeElement,
      'innerHtml',
      newTextContent
    );
  }
}
