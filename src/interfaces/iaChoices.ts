export interface IAChoices {
    message: {
        role: string; 
        content: string;
    },
    index: number;
    finish_reason: string;
}