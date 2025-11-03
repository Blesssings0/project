export interface Topic {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
}

export interface Article {
  id: number;
  topicId: number;
  title: string;
  slug: string;
  content: string;
  subsections?: Subsection[];
}

export interface Subsection {
  title: string;
  content: string;
}
