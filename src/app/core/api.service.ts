import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  hostname:string = 'localhost'
  protocol:string = 'http'
  port:string = '3000'

  constructor() { }

  getHost(){
    return this.protocol + '://' + this.hostname + ':' + this.port
  }
}
