/**
 * Resume/CV template created with Bootstrap 5 by @vmoratog and @jdnichollsc
 */
const resume = {
  firstName: 'Thusitha',
  lastName: 'Jayalath',
  jobTitle: 'Full Stack Engineer',
  city: '177/3, Pallethalawinna, Katugastota, Kandy',
  postalCode: '20800',
  country: 'Sri Lanka',
  phone: '+94776682277',
  email: 'thusitha.4t@gmail.com',
  education: [
    {
      school: 'University of Colombo School of Computing',
      degree: 'Bachelor',
      graduationDate: '2017',
      description: 'Computer Science'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/thuyiya'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/thuyiya/'
    },
    {
      label: 'Website',
      link: 'https://thuyiya.github.io/profile'
    }
  ],
  skills: [
    'IOS',
    'Swift',
    'ReactJS',
    'React Native',
    'Ionic',
    'Angular',
    'C#',
    'JSX',
    'PHP',
    'HTML5',
    'CSS',
    'SASS',
    'JSS',
    'JavaScript',
    'TypeScript',
    'NodeJS/NestJS',
    'GCP'
  ],
  databses: [
    'PostgreSQL',
    'MongoDB',
    'SQL',
    'Core Data',
    'SQLight',
    'Redis'
  ],
  tools: [
    'Loopback',
    'PM2',
    'NGINX',
    'Docker',
    'App-Center',
    'Heroku',
    'Webpack',
    'OneSignal',
    'ElectronJS',
    'Jest',
    'Mocha',
    'GraphQL',
    'Redux',
    'Agile',
    'Flux',
    'NPM',
    'Enzyme',
    'D3',
    'Firebase',
    'VSCode',
    'Unity3D',
    'Xcode',
    'Android Studio',
    'Bootstrap',
    'MUI'
  ],
  languages: ['English', 'Sinhala'],
  professionalSummary: `Developer with a background in web, mobile and game development, having 5+ years of practice and leadership building interactive experiences.
    Great enthusiastic teamwork, considered helpful, creative, assertive and cautious.`,
  employmentHistory: [
    {
      jobTitle: 'Team Lead / Full-Stack Engineer',
      startDate: 'MAY 2020',
      endDate: 'Present',
      employer: 'Zonein',
      city: 'New York',
      achievements: [
        'Led code refactors using best practices with Angular & NgRx to improve code reusability from web and mobile apps.',
        'Created demos and collaborated with the team for integrations with third-party providers like Uber Eats.'
      ]
    },
    {
      jobTitle: 'Consultant and Team Leader',
      startDate: 'JAN 2021',
      endDate: 'APR 2021',
      employer: 'NEMAS, AB',
      city: 'Sweden',
      achievements: [
        'Created the baseline for the development of reactive apps using new technologies such as MeteorJS and GraphQL for rapid prototyping.',
        'Contributed to configure continuous integration pipelines for new projects through cloud services with Azure and Visual Studio Team Services.'
      ]
    },
    {
      jobTitle: 'Frontend Lead',
      startDate: 'Nov 2019',
      endDate: 'May 2020',
      employer: 'Orvero',
      city: 'Colombo',
      achievements:[
        'Joined as the first remote employee and worked with the founders to improve the performance and UX of the apps according to the business goals.',
        'Led team of 5 engineers and Coordinate with other teams to build a modular mobile app for iOS and Android with React Native.',
        'Developed native integrations to improve the UX of mobile apps, reaching more than 3 million downloads with Open Source side projects.',
      ]
    },
    {
      jobTitle: 'Senior Software Engineer',
      startDate: 'Sep 2018',
      endDate: 'Nov 2019',
      employer: 'Esshva Techq',
      city: 'USA',
      achievements: [
        'Created a course about JavaScript Patterns for the company.',
        'Defined baseline for cross-platform mobile applications using new technologies, with these results the company became an Ionic Trusted Partner.',
        'Help engineers grow by guiding them through the right challenges, developing self-confidence and soft skills by delegating new responsibilities through a mentoring process.'
      ]
    },
    {
      jobTitle: 'Guest Lecturer',
      startDate: 'Apr 2017',
      endDate: 'Present',
      employer: 'University Of colombo, NIBM',
      city: 'Sri Lanka',
      achievements: [
        'Designed baselines for mobile application development using PhoneGap/Cordova with Ionic Framework.',
        'Trained the team for the implementation of new methodologies such as ALM for the management of applications.'
      ]
    },
    {
      jobTitle: 'Senior Software Engineer',
      startDate: 'Feb 2017',
      endDate: 'Aug 2018',
      employer: 'Crowderia',
      city: 'Sweden',
      achievements: [
        'Designed baselines for mobile application development using PhoneGap/Cordova with Ionic Framework.',
        'Trained the team for the implementation of new methodologies such as ALM for the management of applications.'
      ]
    },
    {
      jobTitle: 'Intern, Software Engineer',
      startDate: 'AUG 2016',
      endDate: 'Jun 2017',
      employer: 'Crowderia',
      city: 'Sweden',
      achievements: [
        `Help the decision-making process of the company, performing research and developing ideas to migrate the company's web portal using CMS based on ASP.NET.`
      ]
    },
    {
      jobTitle: 'Game Developer',
      startDate: 'Jul 2014',
      endDate: 'Dec 2014',
      employer: 'GCBlock',
      city: 'Colombo',
      achievements: [
        'Create a small game for mobile, introduce new user input for handle vehical in the movile screen without controller ui'
      ]
    }
  ],
  photo: 'https://raw.githubusercontent.com/thuyiya/profile/main/profile.png',
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume)
});

/**
 * Wait for animatable-component to be loaded (Only for VanillaJS)
 **/
function animatableLoaded() {
  document.querySelector('body').classList.remove('d-none');
}
if (customElements) {
  customElements.whenDefined('animatable-component').then(animatableLoaded);
} else animatableLoaded()