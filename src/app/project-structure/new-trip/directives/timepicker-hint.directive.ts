import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { TimePickerComponent } from '@progress/kendo-angular-dateinputs';

interface IConfig {
  hint?: [ string, string ];
  placeholder?: string;
}

@Directive({
  selector: '[fgTimepickerHint]'
})
export class TimepickerHintDirective implements OnInit{

  @Input('fgTimepickerHint') public config: IConfig;

  constructor(private _element: TimePickerComponent, private _renderer: Renderer2) {
  }

  ngOnInit() {
    this._element.placeholder = this.config.placeholder;
    const kendoTimePicker = (this._element as any).element.nativeElement;

    // this._element.
    // const hint = this._renderer.createElement('div');
    // this._renderer.appendChild(hint, this._renderer.createText(this.config.hint));
    // this._renderer.appendChild(kendoTimePicker, hint);
    // console.log(this._element);
    this._element.valueChange.subscribe((something) => console.log(something));

    // this._renderer.addClass(kendoTimePicker,  this.config.error ? 'timepicker-error' :  'timepicker-hint');
    // console.log(this.config.error);

  }

}
