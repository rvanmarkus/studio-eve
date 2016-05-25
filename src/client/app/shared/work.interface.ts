import { SlideShowItem } from './slideshow-item.interface';
export interface Work {
	title: string;
	slug: string;
	overviewPicture: string;
	pictures?: string[];
	content: string;
	movie?: string;
	slideshow?: SlideShowItem[];
}
