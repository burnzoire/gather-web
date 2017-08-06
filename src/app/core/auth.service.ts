import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  getAuthorizationHeader():string {
    return 'Token token=WFdgnRQcr0mPxEVlocsj4Att'
  }

}
