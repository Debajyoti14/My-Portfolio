import { EXPERIENCE, FEATURED_PROJECT, PROJECTS, SITE_URL, SOCIAL } from '@/constants/site';

/** Stable `@id`s so the graph nodes can cross-reference each other. */
const PERSON_ID = `${SITE_URL}/#person`;
const SITE_ID = `${SITE_URL}/#website`;

/** The current employer is the first role of the first job — EXPERIENCE is
 *  ordered most-recent-first. */
const currentEmployer = EXPERIENCE[0]?.company;

/**
 * Schema.org graph describing the site owner and the site itself. Rendered once
 * in the root layout so every page carries it. Google uses `Person` for
 * knowledge-panel entity resolution and `sameAs` to confirm that the GitHub,
 * LinkedIn, and X accounts are the same individual.
 */
export const personJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: 'Debajyoti Saha',
      url: SITE_URL,
      image: `${SITE_URL}/Picture.jpg`,
      jobTitle: 'Software Developer',
      email: SOCIAL.email,
      description:
        'Software developer specializing in Cloud, DevOps, and Backend engineering.',
      knowsAbout: [
        'Cloud Computing',
        'DevOps',
        'Backend Development',
        'Amazon Web Services',
        'Rust',
        'Kubernetes',
        'Terraform',
        'Next.js',
        'Node.js',
        'Flutter',
      ],
      ...(currentEmployer
        ? { worksFor: { '@type': 'Organization', name: currentEmployer } }
        : {}),
      // Identity links — these are what tie the profiles to this entity.
      sameAs: [SOCIAL.github, SOCIAL.linkedin, SOCIAL.x],
    },
    {
      '@type': 'WebSite',
      '@id': SITE_ID,
      url: SITE_URL,
      name: 'Debajyoti Saha',
      inLanguage: 'en-GB',
      publisher: { '@id': PERSON_ID },
    },
    // Projects surface as creative works attributed to the person.
    ...[FEATURED_PROJECT, ...PROJECTS].map((project) => ({
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: project.url,
      image: `${SITE_URL}${encodeURI(project.image)}`,
      author: { '@id': PERSON_ID },
      keywords: project.tags.join(', '),
    })),
  ],
};
