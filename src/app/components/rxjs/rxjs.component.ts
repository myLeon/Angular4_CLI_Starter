import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  @ViewChild('dbclick') dbclick: ElementRef;
  @ViewChild('tbclick') tbclick: ElementRef;
  constructor() { }

  ngOnInit() {
    
      let dbclickStream = Observable.fromEvent(this.dbclick.nativeElement, 'click');
        // .subscribe(res => console.log(res));
      dbclickStream
      .buffer(dbclickStream.debounceTime(250))
      .map(list => list.length)
      .filter(x => x === 2)
      .subscribe(() => {
        console.log('doubleclick');
        alert("成功 - 利用rxjs实现双击事件")
      })


      let tbclickStream = Observable.fromEvent(this.tbclick.nativeElement, 'click');
        // .subscribe(res => console.log(res));
      tbclickStream
      .buffer(tbclickStream.debounceTime(250))
      .map(list => list.length)
      .filter(x => x === 3)
      .subscribe(() => {
        console.log('3 click');
        alert("成功 - 利用rxjs实现3击事件")
      })
  }


}
