interface ActionType<T> {
  success: boolean;
  message: string;
  data?: T;
}
