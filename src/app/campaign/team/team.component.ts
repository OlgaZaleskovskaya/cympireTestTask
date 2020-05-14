import { Component, Input } from '@angular/core';

import {
  trigger,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Subscription } from 'rxjs';
import { ITeam } from '../campaign.model';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})

export class TeamComponent {
  @Input() team: ITeam;
  @Input() progress: number;
  smth: string;
  campSubcription: Subscription;
  isOpened = false;
  test = false;

  constructor() { }

  getProgress() {
    return this.progress;
  }

  getName(i: number): string {
    return this.team.steps[i].step_name;
  }

  onOpen() {
    this.isOpened = true;
  }

  onClose() {
    if (this.isOpened = true) {
      this.isOpened = false
    }
  }

}
