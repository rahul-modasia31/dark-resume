import { IconName } from '@/config/iconConfig';

// Render list of icons in the order you want them to appear in the resume
// Add icon name in iconconfig.ts. If you want to add a new icon, add it in iconconfig.ts and add it here
export const TECH_LIST: IconName[] = [
	'HTML',
	'CSS',
	'Javascript',
	'Typescript',
	'React',
	'NextJS',
	'TailwindCSS',
	'NodeJS',
	'ExpressJS',
	'SASS',
	'Material-UI',
	'Jest',
	'Bootstrap',
	'Docker',
	'JQuery',
	'PHP',
	'AngularJS',
	'MySql',
	'Sequelize',
	'VSCode'
];

type Contact = {
	name: IconName;
	url: string;
};

// Your personal details here
export const PERSONAL_DETAILS = {
	name: 'Rahul Kumar Modasia',
	role: 'Senior Software Engineer - Javascript',
	location: 'Bikaner, Rajasthan',
	phone: '+91 8078612974',
	email: 'rahul.modasia3107@gmail.com'
};

// Your contact details here. Add or remove fields as you like
export const CONTACT_LIST: Contact[] = [
	{
		name: 'Github',
		url: 'https://github.com/rahul-modasia31'
	},
	{
		name: 'Linkedin',
		url: 'https://www.linkedin.com/in/rahul-kumar-modasia-00713b173/'
	},
	{
		name: 'Gmail',
		url: 'mailto:rahul.modasia3107@gmail.com'
	}
];

type ProjectsList = {
	title: string;
	position: string;
	tenure: string;
	description: string;
	techStack: IconName[];
};

// Your work experience here. Add or remove fields as you like
export const PROJECTS_LIST: ProjectsList[] = [
	{
		title: 'Real Estate Climate Action Platform',
		position: 'Senior Software Engineer - Javascript',
		tenure: 'Aug 2022 - Present',
		description: `A dashboard to assess impact and goals to reduce emissions in Real Estate. This includes emission assessment of properties and reduction measures based on various factors like Energy usage, technology usage,various emission factors, etc.`,
		techStack: [
			'React',
			'Material-UI',
			'Typescript',
			'Jest',
			'Docker',
			'NodeJS',
			'Sequelize'
		]
	},
	{
		title: 'SHL Experiences Platform',
		position: 'Senior Frontend Engineer',
		tenure: 'Aug 2020 - July 2022',
		description: `This platform includes Client & Candidate dashboard. Client platform provides clients in managing hiring solution which includes
		scheduling assessments, generating test reports.Candidate platform is used by candidates for assessments designed by clients. It contains more than
		15 types of tests to determine the ability of candidates.`,
		techStack: ['React', 'Material-UI', 'Typescript', 'Jest', 'SASS']
	},
	{
		title: 'MyAMCAT + AMCAT Global',
		position: 'Software Engineer',
		tenure: 'Aug 2019 - July 2020',
		description: `An assessment interface for AMCAT. MyAMCAT is a platform for candidates to register for AMCAT test and getting recommended jobs based on their result. It also provides extra features like resume builder, interview prep, etc. AMCAT Global is a platform for taking different types of assessments like coding, aptitude, etc.`,
		techStack: ['Javascript', 'AngularJS', 'SASS', 'JQuery', 'PHP', 'MySql']
	}
];

// Your personal projects here. Add or remove fields as you like
export const PERSONAL_PROJECTS_LIST = [
	'School Management System (ERP for School Students)',
	'Faculty Management System (Profile management for college faculties)',
	'College Website Management (College Major)',
	'Resume Builder'
];

export const HOBBIES = ['Cricket', 'Chess', 'LAN Gaming', 'Internet Surfing'];
