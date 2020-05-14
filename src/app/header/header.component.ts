import { Component } from '@angular/core';
import { CampaignService } from '../campaign/campaign.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  constructor(private service: CampaignService) { }

  onRefresh() {
    const smth = this.service.getCampaign().subscribe();
  }
}
