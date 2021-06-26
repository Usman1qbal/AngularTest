export interface CardModel {
  src?: string;
  ban?: string;
  title?: string;
  subTitle?: string;
  content?: string;
  options?: Option[];
}

interface Option {
  text: string;
  icon: string;
}
