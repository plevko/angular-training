import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EmojiAdderDirective } from './emoji-adder.directive';

@NgModule({
  declarations: [EmojiAdderDirective],
  imports: [CommonModule],
  exports: [EmojiAdderDirective],
})
export class EmojiAdderModule {}
