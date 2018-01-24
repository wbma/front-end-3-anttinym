import {Component, OnInit} from '@angular/core';
import {MediaService} from '../services/media.service';
import {DigitransitService} from '../services/digitransit.service';

@Component({
  selector: 'app-list-media',
  templateUrl: './list-media.component.html',
  styleUrls: ['./list-media.component.scss']
})
export class ListMediaComponent implements OnInit {

  printThis: string;
  mediaArray: any;
  stopArray: any;

  constructor(public mediaService: MediaService, private digitransitService: DigitransitService) {
  }

  ngOnInit() {
    this.printThis = this.mediaService.test;
    this.mediaService.getAllMedia().subscribe(data => {
      console.log(data);
      this.mediaArray = data;

      this.mediaArray.forEach((media, index) => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn160.png';
        this.mediaArray[index].thumbnail160 = thumbName;
      });

      this.mediaArray.map(media => {
        const temp = media.filename.split('.');
        const thumbName = temp[0] + '-tn640.png';
        media.thumbnail640 = thumbName;
      });

      const tmp = this.mediaArray[0].filename.split('.');
      console.log(tmp[0] + '-tn320.png');
    });

    this.digitransitService.getRoutes('Gransinmäki').subscribe(response => {
      console.log(response['data'].stops);
      this.stopArray = response['data'].stops;
    });
  }

  thumbnailer(filename: String) {
    const splitFilename = filename.split('.');
    return splitFilename[0] + '-tn320.png';
  }

}
