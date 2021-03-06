import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Resource }       from '../clases'
import { Observable }     from 'rxjs/Observable';
import 'rxjs/Rx';
import { environment }     from '../../environments/environment';

@Injectable()
export class ResourcesService {

  private headers = new Headers();
  private serviceUrlBase:string;
  private serviceName:string;
  constructor (private http: Http) 
  {
      this.headers.append('Accept','application/json, text/javascript, */*; q=0.01');
      this.headers.append('content-type','application/json');
      this.serviceUrlBase = environment.serviceUrlBase;
  }

  getResources(): Observable<Resource[]> {
    this.serviceName = 'resources-list';
    return this.http.get(this.serviceUrlBase + this.serviceName, {headers: this.headers})
                    .map((res: Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
