import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Influencer {
  readonly id: string;
  readonly Name?: string | null;
  readonly email_id?: string | null;
  readonly username?: string | null;
  readonly description?: string | null;
  constructor(init: ModelInit<Influencer>);
  static copyOf(source: Influencer, mutator: (draft: MutableModel<Influencer>) => MutableModel<Influencer> | void): Influencer;
}