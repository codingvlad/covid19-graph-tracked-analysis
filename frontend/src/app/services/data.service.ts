import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { StateReply } from '../model/replies';
import { StateRequest } from '../model/requests';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private serverURL: string = window.location.href;

  constructor(private http: HttpClient) { }

  sayHello(): Observable<string> {
    console.log('saying hello');
    return this.serverGetTextResponse('service/hello').pipe(
      map((response: any): string => {
        return response as string;
      }));
  }

  getServerState(request: StateRequest): Observable<StateReply> {
    console.log('sending ' + JSON.stringify(request))
    return this.serverTextPost('/server-state', request).pipe(
      map((response: any): StateReply => {
        return JSON.parse(response);
      }));
  }

  /**
   * Make a GET request to the specified path expecting a text response.
   * @param path the component
   */
  private serverGetTextResponse(path: String): Observable<any> {
    return this.http.get(this.serverURL + path, { responseType: 'text' });
  }

  /**
   * Send the content to the path using a POST request.
   * @param path the component path
   * @param content the content to be sent
   */
  private serverTextPost(path: String, content: any) {
    return this.http.post(this.serverURL + path, content, { responseType: 'text' });
  }
}
