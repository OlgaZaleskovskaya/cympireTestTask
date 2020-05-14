import { CampaignComponent } from './campaign.component';

import { ICampaign, ITeam } from './campaign.model';

import { CampaignService } from './campaign.service';
import { of } from 'rxjs';


describe('CampaignComponent.calculateTeamProgress', () => {
  let service = new CampaignService(null);
  let component = new CampaignComponent(service);
  let campaign: ICampaign = {
    campaign_instance_id: "id",
    campaign_name: name,
    team_instances: [{
      team_id: "teamId1",
      team_name: "teamName1",
      steps: [{
        status: 'done',
        step_id: "stepId1",
        step_name: "stepName1",
      },
      {
        status: 'done',
        step_id: "stepId2",
        step_name: "stepName2",
      }]
    }, {
      team_id: "team2",
      team_name: "teamName1",
      steps: [{
        status: 'not-started',
        step_id: "stepId1",
        step_name: "stepName1",
      },
      {
        status: 'not-started',
        step_id: "stepId2",
        step_name: "stepName2",
      }]
    }, {
      team_id: "team2",
      team_name: "teamName1",
      steps: [{
        status: 'not-started',
        step_id: "stepId1",
        step_name: "stepName1",
      },
      {
        status: 'done',
        step_id: "stepId2",
        step_name: "stepName2",
      }]
    }]
  };

  it('should return 1 if all steps have status "done"', () => {
    const result = component.calculateTeamProgress(campaign.team_instances[0]);

    expect(result).toBe(1);
  });

  it('should return 0 if all steps have status "not-started"', () => {
    const result = component.calculateTeamProgress(campaign.team_instances[1]);

    expect(result).toBe(0);
  });

  it('should return 0.5 if all steps have status "not-started" "done"', () => {
    const result = component.calculateTeamProgress(campaign.team_instances[2]);

    expect(result).toBe(0.5);
  });

  it('should set campain property with an item recieved from the server', () => {

    spyOn(service, 'getCampaign').and.callFake(() => {
      return of(campaign);
  });

  component.ngOnInit();

  expect(component.campaign).toBe(campaign);
});

});
