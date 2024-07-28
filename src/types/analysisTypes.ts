import { Position } from "vscode";

/*
Data structure which represents parameters used to set compilation targets
*/
export interface AnalysisRequestParams {
  uris?: string[];
}

export interface SliceParams {
  uri: string;
  position: Position;
  forward: boolean;
}