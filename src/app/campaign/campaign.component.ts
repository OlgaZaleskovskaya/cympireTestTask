import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ICampaign, ITeam } from './campaign.model';
import { CampaignService } from './campaign.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss']
})

export class CampaignComponent implements OnInit, OnDestroy {
  campaign: ICampaign;
  campSubcription: Subscription;
  isLoading: boolean = true;
  constructor(private campService: CampaignService) { }


  ngOnInit(): void {
    this.campaign = {
      campaign_instance_id: "",
      campaign_name: "",
      team_instances: [],
    };

    this.campSubcription=this.campService.getCampaign()
      .subscribe(res => {
        this.isLoading = false;
        this.campaign = res;

        let  transformedTeam = [...res.team_instances];
        transformedTeam.forEach((item, index, arr) => {
          item.progress = this.calculateTeamProgress(item);
        });
      }
    );
  };

  calculateTeamProgress(team: ITeam): number {
    if(team.steps.length === 0){
      return -1;
    }
    var result = team.steps.reduce(function (previousValue, currentItem, index, arr) {
      let current;
      switch (currentItem.status) {
        case "done":
          current = 1;
          break;
        case "in_progress":
          current = 0.5;
          break;
        default:
          current = 0;
          break;
      }
      return (previousValue + current)
    }, 0);
    return result/team.steps.length;
  }

  ngOnDestroy(): void {
    this.campSubcription.unsubscribe();
  }
}
