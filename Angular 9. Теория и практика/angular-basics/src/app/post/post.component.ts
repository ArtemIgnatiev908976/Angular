import {
  EventEmitter,
  Component,
  OnInit,
  Input,
  ContentChild,
  ElementRef,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Output
} from '@angular/core';
import {Post} from '../app.component'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() post: Post
  @ContentChild('info', {static: true}) infoRef: ElementRef
  @Output() onRemove = new EventEmitter<number>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes)
  }

  ngOnInit() {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }

  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('AfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked')
  }


  ngAfterViewInit() {
    console.log('AfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked')
  }

  ngOnDestroy() {
    console.log('OnDestroy')
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }

}
