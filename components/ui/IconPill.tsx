import { ICONS_MAPPING, IconName } from '@/config/iconConfig';
import React from 'react';

type IconPillProps = {
	name: IconName;
};

const IconPill = ({ name }: IconPillProps) => {
	const Icon = ICONS_MAPPING[name];
	return (
		<div className="inline-flex items-center justify-between gap-2 rounded-md bg-slate-800 px-2 py-1 text-sm text-white">
			{Icon && <Icon />}
			<p>{name}</p>
		</div>
	);
};

export default IconPill;
