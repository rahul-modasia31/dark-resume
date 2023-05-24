import React from 'react';
import { TECH_LIST } from '@/data/resumeData';
import TechList from './TechList';
import Heading from './ui/Heading';

const TechStack = () => {
	return (
		<div className="flex flex-col gap-2">
			<Heading name="Technology & Languages" />
			<TechList list={TECH_LIST} />
		</div>
	);
};

export default TechStack;
