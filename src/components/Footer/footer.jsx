import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-gray-800 font-serif text-gray-300 p-12">
			<div className="container  flex flex-wrap justify-between">
				<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
					<h2 className="text-4xl max-sm:text-2xl font-semibold mb-4 font-serif">Together, let's empower, support, and heal</h2>
					<p className="text-2xl md:mt-5 font-serif">When She Knows!</p>
				</div>

				<div className='flex max-[410px]:flex-col' >
					<div className="w-full  px-4 mb-8">
						<h2 className="text-lg font-semibold mb-4">Crisis Chat</h2>
						<p className="text-sm">24/7 helpline</p>
						<p className="text-sm">Emergency resources</p>
						<p className="text-sm">Find a shelter</p>
					</div>
					<div className="w-full px-4 mb-8">
						<h2 className="text-lg font-semibold mb-4">Community</h2>
						<p className="text-sm">Survivor stories</p>
						<p className="text-sm">Support groups</p>
						<p className="text-sm">Volunteer groups</p>
						<p className="text-sm">Local support</p>
					</div>
					<div className="w-full px-4 mb-8">
						<h2 className="text-lg font-semibold mb-4">Resources</h2>
						<p className="text-sm">Emotional guides</p>
						<p className="text-sm">Statistics and reports</p>
						<p className="text-sm">Emergency resources</p>
						<p className="text-sm">Find a shelter</p>
					</div>
				</div>
			</div>
			<div className="text-center mt-8">
				<p className="text-xs">&copy; 2024 When She Knows. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
