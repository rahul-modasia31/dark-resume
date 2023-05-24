import { PERSONAL_PROJECTS_LIST } from '@/data/resumeData';
import React from 'react';
import Heading from './ui/Heading';

const PersonalProjects = () => {
	return (
		<div className="flex flex-col gap-2">
			<Heading name="Personal Projects" />
			<ul className="list-disc px-4">
				{PERSONAL_PROJECTS_LIST.map(project => (
					<li key={project}>{project}</li>
				))}
			</ul>
		</div>
	);
};

export default PersonalProjects;
