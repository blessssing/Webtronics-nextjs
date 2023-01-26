export interface IFormInputs {
  id?: number;
  name: string;
  phone: string;
  email: string;
}

export interface FeedbackState {
  feedback: IFormInputs[];
}
