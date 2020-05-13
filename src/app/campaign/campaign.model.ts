export interface ICampaign {
  campaign_instance_id: string,
  campaign_name: string,
  team_instances: ITeam[]
};

export interface ITeam {
  "team_id": string,
  "team_name": string,
  "steps": IStep[],
 "progress"?: number
}

export interface IStep {
  "status": "done" | "in_progress" | "not-started",
  "step_id": string,
  "step_name": string,

}
