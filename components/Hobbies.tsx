import React from 'react';
import Heading from './ui/Heading';
import { HOBBIES } from '@/data/resumeData';

const Hobbies = () => {
	return (
		<div className="flex flex-col gap-2">
			<Heading name="Hobbies" />
			{HOBBIES.join(', ')}
		</div>
	);
};

export default Hobbies;
