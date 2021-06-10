import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {

  constructor(private _router: Router, private _loginService: LoginService) {
  }

  canActivate():boolean {
    if (this._loginService.isLogin()){
      return true;
    }else {
      // this._router.navigate(['Login']);
      this._router.navigateByUrl('/login').then(responce=>{
        console.log(responce);
      }, error=>{
        console.log(error);
      })
      return false;

    }
  }

}
