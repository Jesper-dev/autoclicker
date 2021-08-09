export interface SqaureProps<T> {
  values: T;
  children: (values: T) => JSX.Element;
}
