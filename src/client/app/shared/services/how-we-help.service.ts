import { Injectable } from 'angular2/core';

@Injectable()
export class HowWeHelpService {
	services = [
		{
			title: 'Service Design',
			home: `Service design lends tools in which you can
			 learn more about your user then ever before. We help you listen to your users and use service design tools
			 to upgrade your service or product...`,
			content: `<p>Service design lends tools in which you can learn more about
			 your user then ever before. We help you listen to your users and
			 use service design tools to upgrade your service or product... asdlkfjasldkfj asdlkfja sdlfkj asdlfkjas dflkj</p>`,
			image: '/assets/service-design.jpg',
		},
		{
			title: 'Visual Design',
			home: `Technology and ways to
			 communicate have grown exponentially, and internet makes it
			 possible spreading information over the world everyday.. How to spread your story...`,
			content: `<p>Technology and ways to communicate have
			 grown exponentially, and internet makes it possible spreading information over the world everyday.. How to spread your story...</p>`,
			image: '/assets/visual-design.jpg',
		},
		{
			title: 'Strategic Design',
			home: `We help you creating a company in which an
			 innovation in a natural outcome of a creative way of working. We learn design thinking in five diffrent steps...`,
			content: `<p>We help you creating a company
			 in which an innovation in a natural outcome of a creative way of working. We learn design thinking in five diffrent steps...</p>`,
			image: '/assets/strategic-design.jpg',
		}
	];

	constructor() { }

}