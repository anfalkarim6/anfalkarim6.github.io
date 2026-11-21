/** Everything personal about the site lives here. */
export const site = {
  name: 'Anfal Karim',
  firstName: 'Anfal',
  lastName: 'Karim',
  initials: 'AK',
  tagline: 'Essays and drawings on architecture',
  description:
    'Anfal Karim writes about buildings to understand how they think, from Mughal screens to Brutalist estates, and draws her own to find out if she is right.',
  city: 'Quetta',
  country: 'Pakistan',
  statement: 'I write about buildings to understand how they think, and draw my own to find out if I’m right.',
  status: 'Applying to architecture programmes in the UK and US for 2027 entry',
  email: 'anfal.karim662023@icloud.com',
} as const;

/** Sheet numbers follow an architectural drawing set: A-000 cover, A-100 essays, A-200 projects, A-300 about. */
export const sheets = {
  home: { no: 'A-000', name: 'Cover sheet' },
  essays: { no: 'A-100', name: 'Register of essays' },
  projects: { no: 'A-200', name: 'Projects' },
  about: { no: 'A-300', name: 'About' },
} as const;
