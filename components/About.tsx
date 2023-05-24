import { PERSONAL_DETAILS } from '@/data/resumeData';
import Link from 'next/link';
import React from 'react';
import { SiGmail } from 'react-icons/si';
import { SlLocationPin, SlPhone } from 'react-icons/sl';

const About = () => {
	const { name, role, location, phone, email } = PERSONAL_DETAILS;
	return (
		<div className="flex flex-col gap-1">
			<h1 className="text-2xl">{name}</h1>
			<p>{role}</p>
			<div className="flex gap-4 text-sm md:flex-col">
				<div className="flex items-center gap-2">
					<SlLocationPin />
					<span>{location}</span>
				</div>
				<div className="flex items-center gap-2">
					<SlPhone /> <span>{phone}</span>
				</div>
				<div className="flex items-center gap-2">
					<SiGmail />
					<span>
						<Link href={`mailto:${email}}`}>{email}</Link>
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
