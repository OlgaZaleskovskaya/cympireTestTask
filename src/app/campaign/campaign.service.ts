import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ICampaign } from './campaign.model';
const URL = environment.url;

@Injectable({ providedIn: 'root' })
export class CampaignService {

  private campaignUpdated = new Subject<ICampaign>();


  constructor(private http: HttpClient) { }


  getCampaign() {
    /*  this.http.get<{campaign: ICampaign }>(URL)
      .subscribe(campaignData => {
          const campaignDataCopy = { ...campaignData };
          const result = campaignDataCopy.campaign;
          return this.campaignUpdated.next(result);
        }) */
   return this.http.get<{ campaign: ICampaign }>(URL)
      .pipe(map(campaignData => {
        const campaignDataCopy = { ...campaignData };
        return campaignDataCopy.campaign;
      }));

  }

  getCampaignUpdateListener() {
    return this.campaignUpdated.asObservable();
  }


}
