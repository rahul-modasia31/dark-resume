import Link from 'next/link';
import React from 'react';
import IconPill from './ui/IconPill';
import { CONTACT_LIST } from '@/data/resumeData';
import Heading from './ui/Heading';

const Contacts = () => {
	return (
		<div className="flex flex-col gap-2">
			<Heading name="Contacts" />
			<div className="flex flex-wrap gap-2 font-semibold">
				{CONTACT_LIST.map(item => (
					<Link href={item.url} key={item.name}>
						<IconPill name={item.name} />
					</Link>
				))}
			</div>
		</div>
	);
};

export default Contacts;
