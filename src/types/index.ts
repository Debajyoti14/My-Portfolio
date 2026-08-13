export type Theme = 'dark' | 'light';

export interface NavLink {
  href: string;
  label: string;
}

export interface PracticeArea {
  index: string;
  name: string;
  description: string;
}

/** A single position within a company. Either `bullets` or `body` carries the
 *  detail — ClueLess uses prose, the rest use bullet lists. */
export interface Role {
  title: string;
  type: string;
  meta: string;
  bullets?: string[];
  body?: string;
  visibleSkills?: string[];
  hiddenSkills?: string[];
}

export interface Job {
  company: string;
  duration: string;
  location: string;
  roles: Role[];
}

export type ProjectType = 'Backend' | 'Flutter' | 'React';

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  mainType?: ProjectType;
}

export interface FeaturedProject extends Project {
  kicker: string;
}

export interface WritingEntry {
  date: string;
  title: string;
  href: string;
}

export interface TechGroup {
  label: string;
  items: string;
}
