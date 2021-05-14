import {Directive, ViewContainerRef,TemplateRef,Input} from '@angular/core';

@Directive({
  selector: '[appIfnot]'
})
export class IfnotDirective {

  @Input('appIfnot') set ifNot(condition: boolean){
    if (!condition){
      //показать элементы
      this.viewContainer.createEmbeddedView(this.templateRef)
    }else {
      //Скрыть
      this.viewContainer.clear()  //очищает блок
    }
  }

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef ) {


  }

}
