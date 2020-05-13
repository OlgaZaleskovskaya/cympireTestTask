import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { environment } from "../../environments/environment";
import { ICampaign } from './campaign.model';
const URL = environment.url;

@Injectable({ providedIn: 'root' })
export class CampaignService {

  private campaignUpdated = new Subject<ICampaign>();


  constructor(private http: HttpClient) { }


  getCampaign() {
    return this.http.get<{campaign: ICampaign }>(URL)
    .subscribe(campaignData => {
        const campaignDataCopy = { ...campaignData };
        const result = campaignDataCopy.campaign;
        return this.campaignUpdated.next(result);
      })
  }

  getCampaignUpdateListener() {
    return this.campaignUpdated.asObservable();
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
