import { Injectable } from 'angular2/core';
import { HelpMethod } from '../help-method.interface';
@Injectable()
export class HowWeHelpService {
	services : HelpMethod[]  = [
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
			content: `
				<div class="row">
			<div class="col-md-15">
				<h3 class="circle">Create to inovate</h3>
				<div class="content">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat nisl quis nisi varius aliquet. Nunc quam ipsum, mollis ullamcorper mauris sed, feugiat cursus justo. Donec faucibus accumsan sapien, vitae cursus elit tempor sit amet. Quisque nec bibendum tellus. Donec in enim ut dui condimentum eleifend sit amet at nunc. Cras tincidunt nec est ut bibendum. Donec sed purus luctus, pretium neque ut, scelerisque est. Pellentesque at mi suscipit lorem dignissim malesuada.</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Creative process</h3>
				<div class="content">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat nisl quis nisi varius aliquet. Nunc quam ipsum, mollis ullamcorper mauris sed, feugiat cursus justo. Donec faucibus accumsan sapien, vitae cursus elit tempor sit amet. Quisque nec bibendum tellus. Donec in enim ut dui condimentum eleifend sit amet at nunc. Cras tincidunt nec est ut bibendum. Donec sed purus luctus, pretium neque ut, scelerisque est. Pellentesque at mi suscipit lorem dignissim malesuada.</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Big data design analysis</h3>
				<div class="content">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat nisl quis nisi varius aliquet. Nunc quam ipsum, mollis ullamcorper mauris sed, feugiat cursus justo. Donec faucibus accumsan sapien, vitae cursus elit tempor sit amet. Quisque nec bibendum tellus. Donec in enim ut dui condimentum eleifend sit amet at nunc. Cras tincidunt nec est ut bibendum. Donec sed purus luctus, pretium neque ut, scelerisque est. Pellentesque at mi suscipit lorem dignissim malesuada.</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Inhouse design schooling</h3>
				<div class="content">

					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat nisl quis nisi varius aliquet. Nunc quam ipsum, mollis ullamcorper mauris sed, feugiat cursus justo. Donec faucibus accumsan sapien, vitae cursus elit tempor sit amet. Quisque nec bibendum tellus. Donec in enim ut dui condimentum eleifend sit amet at nunc. Cras tincidunt nec est ut bibendum. Donec sed purus luctus, pretium neque ut, scelerisque est. Pellentesque at mi suscipit lorem dignissim malesuada.</p>
				</div>
			</div>
			<div class="col-md-15">
				<h3 class="circle">Inhouse design schooling</h3>
				<div class="content">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat nisl quis nisi varius aliquet. Nunc quam ipsum, mollis ullamcorper mauris sed, feugiat cursus justo. Donec faucibus accumsan sapien, vitae cursus elit tempor sit amet. Quisque nec bibendum tellus. Donec in enim ut dui condimentum eleifend sit amet at nunc. Cras tincidunt nec est ut bibendum. Donec sed purus luctus, pretium neque ut, scelerisque est. Pellentesque at mi suscipit lorem dignissim malesuada.</p>
				</div>
			</div>
		</div>


			`,
			image: '/assets/strategic-design.jpg',
		}
	];
		get() {
			return this.services;
		}
}
