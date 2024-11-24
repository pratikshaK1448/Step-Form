import { Step } from "../types";

export interface ITab {
    name: string;
    href: string;
    current: boolean;
}

export interface Istepsreducer {
    activeStepId: number;
    steps: Step[]
}
