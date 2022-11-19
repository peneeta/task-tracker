// Create an interface for a task
// ID set to optional

export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}