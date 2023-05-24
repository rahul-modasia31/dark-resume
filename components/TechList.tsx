import React from 'react';
import IconPill from './ui/IconPill';
import { IconName } from '@/config/iconConfig';

type TechListProps = {
	list: IconName[];
};

const TechList = ({ list }: TechListProps) => {
	return (
		<div className="flex flex-wrap gap-2">
			{list.map(item => (
				<IconPill name={item} key={item} />
			))}
		</div>
	);
};

export default TechList;
