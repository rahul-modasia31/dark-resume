import { PROJECTS_LIST } from '@/data/resumeData';
import React from 'react';
import { AiOutlineProject } from 'react-icons/ai';
import TechList from './TechList';
import Heading from './ui/Heading';

const Projects = () => {
	return (
		<div className="flex flex-col gap-2">
			<Heading name="Projects" />
			{PROJECTS_LIST.map(project => (
				<div
					className="mb-2 flex gap-4 text-slate-300"
					key={project.title}
				>
					<div className="md:hidden">
						<AiOutlineProject className="h-16 w-16" />
					</div>
					<div className="flex flex-col">
						<h3 className="font-bold">{project.title}</h3>
						<div className="flex gap-3 text-sm md:flex-col md:gap-0">
							<span>{project.position},</span>
							<span>{project.tenure}</span>
						</div>
						<p className="mb-2 mt-2">{project.description}</p>
						<TechList list={project.techStack} />
					</div>
				</div>
			))}
		</div>
	);
};

export default Projects;
