import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ICampaign } from './campaign.model';
const URL = environment.url;

@Injectable({ providedIn: 'root' })
export class CampaignService {

  private campaignUpdated = new Subject<ICampaign>();

  constructor(private http: HttpClient) { }

  getCampaign() {
    return this.http.get<{ campaign: ICampaign }>(URL)
      .pipe(map(campaignData => {
        const campaignDataCopy = { ...campaignData };
        if(!campaignDataCopy.campaign.campaign_name){
          campaignDataCopy.campaign.campaign_name = "No name";
        }
        return campaignDataCopy.campaign;
      }));
  }

  getCampaignUpdateListener() {
    return this.campaignUpdated.asObservable();
  }

}
