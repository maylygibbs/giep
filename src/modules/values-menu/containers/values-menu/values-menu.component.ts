import { Component, OnInit } from '@angular/core';

import { questions } from '@modules/values-menu/data';

@Component({
  selector: 'sb-values-menu',
  templateUrl: './values-menu.component.html',
  styleUrls: ['./values-menu.component.scss']
})
export class ValuesMenuComponent implements OnInit {

  public questions = questions;
  public section: number = 1;

  constructor() { }

  ngOnInit(): void {
    console.log('questions', this.questions)
  }


  onCahngeQ1(event: any){
    const options = this.questions[0].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if(count==2){
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = true;
        }
      });
    }else{
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = false;
        }
      });
    }
    console.log('questions', this.questions)
  }

  onCahngeQ2(event: any){
    const options = this.questions[1].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if(count==2){
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = true;
        }
      });
    }else{
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = false;
        }
      });
    }
    console.log('questions', this.questions)
  }

  onCahngeQ3(event: any){
    const options = this.questions[2].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if(count==2){
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = true;
        }
      });
    }else{
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = false;
        }
      });
    }
    console.log('questions', this.questions)
  }

  onCahngeQ4(event: any){
    const options = this.questions[3].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if(count==2){
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = true;
        }
      });
    }else{
      options.forEach((element:any) => {
        if (element.selected==false) {
          element.disabled = false;
        }
      });
    }
    console.log('questions', this.questions)
  }

  nextSection(){
    this.section++;
  }

  validateQ1(){
    this.nextSection();
  }

  validateQ2(){
    this.nextSection();
  }

  validateQ3(){
    this.nextSection();
  }

  validateQ4(){
    this.nextSection();
  }

}
