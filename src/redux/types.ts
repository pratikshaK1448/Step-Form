export interface IupdateStep {
    id: number;
    steps: Step[]
}

export interface Step {
    id: number;
    name: string;
    href: string;
    status: 'complete' | 'current' | 'upcoming';
}
