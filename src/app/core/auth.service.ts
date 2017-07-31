import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getAuthorizationHeader():string {
    return 'Token token=Myp5abOTJcOiB3S8ah7i4gtt'
  }

}
