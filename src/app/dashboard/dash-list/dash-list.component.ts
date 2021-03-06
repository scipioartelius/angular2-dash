import { Component, OnInit, Input } from '@angular/core';

import { NavService } from '../../nav.service';
import { LectureItem } from './lecture-item';

@Component({
  selector: 'app-dash-list',
  templateUrl: './dash-list.component.html',
  styleUrls: ['./dash-list.component.css']
})
export class DashListComponent implements OnInit {

  @Input() list: string[];
  selectedLecture: LectureItem;

  constructor(private navService: NavService) { }

  ngOnInit() {

  }

  onSelected(lecture: LectureItem){
      this.navService.setActiveLectureItem(lecture);
  }

}
