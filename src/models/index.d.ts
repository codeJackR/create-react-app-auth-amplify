import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCreatorDetails = {
  readonly id: string;
  readonly creator_id: string;
  readonly username?: string | null;
  readonly email_id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly last_updated_at?: string | null;
}

type LazyCreatorDetails = {
  readonly id: string;
  readonly creator_id: string;
  readonly username?: string | null;
  readonly email_id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly last_updated_at?: string | null;
}

export declare type CreatorDetails = LazyLoading extends LazyLoadingDisabled ? EagerCreatorDetails : LazyCreatorDetails

export declare const CreatorDetails: (new (init: ModelInit<CreatorDetails>) => CreatorDetails) & {
  copyOf(source: CreatorDetails, mutator: (draft: MutableModel<CreatorDetails>) => MutableModel<CreatorDetails> | void): CreatorDetails;
}

type EagerCreator = {
  readonly id: string;
  readonly username: string;
  readonly email_id: string;
}

type LazyCreator = {
  readonly id: string;
  readonly username: string;
  readonly email_id: string;
}

export declare type Creator = LazyLoading extends LazyLoadingDisabled ? EagerCreator : LazyCreator

export declare const Creator: (new (init: ModelInit<Creator>) => Creator) & {
  copyOf(source: Creator, mutator: (draft: MutableModel<Creator>) => MutableModel<Creator> | void): Creator;
}