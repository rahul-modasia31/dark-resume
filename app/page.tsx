'use client';
import About from '@/components/About';
import Contacts from '@/components/Contacts';
import Hobbies from '@/components/Hobbies';
import PersonalProjects from '@/components/PersonalProjects';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';

export default function Home() {
	return (
		<main className="min-h-screen w-full p-24 md:p-2">
			<div className="mx-auto flex max-w-7xl flex-col gap-3 border border-white p-4">
				<About />
				<Contacts />
				<TechStack />
				<Projects />
				<PersonalProjects />
				<Hobbies />
			</div>
		</main>
	);
}
