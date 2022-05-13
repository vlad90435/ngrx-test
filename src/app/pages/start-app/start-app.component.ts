import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-start-app',
  templateUrl: './start-app.component.html',
  styleUrls: ['./start-app.component.scss']
})
export class StartAppComponent implements OnInit,AfterViewInit {

  constructor() { }
  @ViewChild('myButton', {static: false}) public myButton:ElementRef;

  ngOnInit(): void {
  
  }
  ngAfterViewInit() {
    console.log(this.myButton)
    setTimeout(() => {
      this.myButton.nativeElement.click()
    }, 2000)
  }

}
