import {
	SiGithub,
	SiLinkedin,
	SiGmail,
	SiReact,
	SiHtml5,
	SiCss3,
	SiExpress,
	SiJavascript,
	SiTailwindcss,
	SiTypescript,
	SiNodedotjs,
	SiJest,
	SiDocker,
	SiMui,
	SiVisualstudio,
	SiNextdotjs,
	SiBootstrap,
	SiAngularjs,
	SiPhp,
	SiSass,
	SiMysql,
	SiSequelize,
	SiJquery
} from 'react-icons/si';

// Currently using react-icons/si. You can use any icon library you want and add it here
export const ICONS_MAPPING = {
	Github: SiGithub,
	Linkedin: SiLinkedin,
	Gmail: SiGmail,
	React: SiReact,
	HTML: SiHtml5,
	CSS: SiCss3,
	Javascript: SiJavascript,
	Typescript: SiTypescript,
	NodeJS: SiNodedotjs,
	ExpressJS: SiExpress,
	TailwindCSS: SiTailwindcss,
	Jest: SiJest,
	Docker: SiDocker,
	VSCode: SiVisualstudio,
	'Material-UI': SiMui,
	NextJS: SiNextdotjs,
	Bootstrap: SiBootstrap,
	PHP: SiPhp,
	AngularJS: SiAngularjs,
	SASS: SiSass,
	MySql: SiMysql,
	Sequelize: SiSequelize,
	JQuery: SiJquery
} as const;

export type IconName = keyof typeof ICONS_MAPPING;
