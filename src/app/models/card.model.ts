export interface CardModel {
  src?: string;
  title?: string;
  subTitle?: string;
  content?: string;
  options?: Option[];
}

interface Option {
  text: string;
  icon: string;
}
