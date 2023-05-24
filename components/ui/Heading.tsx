import React from 'react';

type HeadingProps = {
	name: string;
};

const Heading = ({ name }: HeadingProps) => {
	return <h2 className="mt-2 text-lg font-bold">{name}</h2>;
};

export default Heading;
