import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { ReceivingAgent} from '../../agent/_models/receiving-agent';
import {Observable} from "rxjs";
import {Agent} from "../../agent";


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AgentService {
  agentApi = 'https://ld0a3g1n5h.execute-api.us-east-2.amazonaws.com/dev';
  constructor(private http: HttpClient) { }


  public  getAgents(): Observable<any> {
    return this.http.get(this.agentApi + '/get-agents');
  }

  public getAgentById(ID): Observable<Agent> {
    return this.http.get<Agent>(`${this.agentApi}/get-agent/${ID}`, httpOptions);

  }
  public createAgent(agent: Agent) {
    return this.http.post(`${this.agentApi}/create-agent/${agent.id}`, agent, httpOptions);
  }
  deleteAgent(ID) {
    return this.http.get(`${this.agentApi}/delete-agent/${ID}`, httpOptions );
  }
}
