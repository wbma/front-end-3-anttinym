import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MediaService {

  test = 'Howdyhou!';
  mediaUrl = 'http://media.mw.metropolia.fi/wbma/uploads/';
  apiUrl = 'http://media.mw.metropolia.fi/wbma';

  constructor(private http: HttpClient) {

  }

  getAllMedia() {
    return this.http.get(this.apiUrl + '/media');
  }
}
