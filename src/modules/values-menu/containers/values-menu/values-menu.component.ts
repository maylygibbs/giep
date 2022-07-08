import { AuthService } from '@modules/auth/services/auth.service';

import { Component, OnInit } from '@angular/core';

import { questions } from '@modules/values-menu/data';
import { ValuesMenuService } from '@modules/values-menu/services/values-menu.service';

@Component({
  selector: 'sb-values-menu',
  templateUrl: './values-menu.component.html',
  styleUrls: ['./values-menu.component.scss']
})
export class ValuesMenuComponent implements OnInit {

  public questions = questions;
  public step:number = 1;
  public section: number = 1;

  constructor(private valuesMenuService:ValuesMenuService,
    private authService: AuthService) { }

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

    const options = this.questions[0].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if (count == 2) {
      this.nextSection();
    }
    
  }

  validateQ2(){
    const options = this.questions[1].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if (count == 2) {
      this.nextSection();
    }
  }

  validateQ3(){
    const options = this.questions[2].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if (count == 2) {
      this.nextSection();
    }
  }

  validateQ4(){
    
    const options = this.questions[3].options;
    let count = 0;
    options.forEach((element:any) => {
      if (element.selected==true) {
        count++;
      }
    });
    if (count == 2) {
      let responses:any[] = [];
      this.questions.forEach((question:any)=>{
        question.options.forEach((option:any) => {
          if (option.selected == true) {
            responses.push({IdOpcionRespuesta: option.IdOpcionRespuesta}) ;
          }
        });
      });
      console.log('responses', {responses: responses} );
      this.valuesMenuService.saveValuesMenu({respuestas: responses});
      this.nextSection();
    }
  }

  ngOnDestroy(){
    this.authService.logout()
  }

}
