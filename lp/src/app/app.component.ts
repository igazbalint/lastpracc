import { Component } from '@angular/core';
import { retry } from 'rxjs';
import { UserInfo } from './google-api.service';
import { GoogleApiService } from './google-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lp';

  userInfo?: UserInfo

  constructor (private readonly googleApi:GoogleApiService){
    googleApi.userProfileSubject?.subscribe( info => this.userInfo = info)
  }
  isLoggedIn(){
    return this.googleApi.isLoggedIn()
  }
  signOut(){
    return this.googleApi.signOut()
  }


   isPrime(num:number) {

    let isPrime:boolean;
    if (num < 2){
      isPrime = false
      return isPrime
    };
    if (num == 2){
      isPrime = true
      return isPrime
    };
    for (var i = 2; i < num; i++) {
      if (num % i === 0){
        isPrime = false
        return isPrime
      }
    }
      isPrime = true
      return isPrime
  }

  camelLetter(word: string){
    var newstring: string ='';
    for(let i:number = 0; i < word.length;i++){
      if( i % 2 == 0){
        newstring += word[i].toUpperCase()
      } else {
        newstring += word[i].toLowerCase()
      }
    }
    return newstring
  }
  array = [1,2,4,8,16]
  map = this.array.map((x)=>{ return x *2}) 
  newarray = [
    {name: 'iphone',price: 1000},
    {name: 'macbook air', price: 999},
    {name: 'macbook pro', price: 1500},
    {name: 'ipad mini', price: 800},
    {name: 'ipad 9', price: 500},
    {name: 'ipad pro', price: 1200},
    {name: 'airpod', price: 200}
  ]
  filtereditems:any[] = this.newarray.filter((item)=>{
    return item.price < 1000
  })
}

