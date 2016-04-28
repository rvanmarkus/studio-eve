import { Work } from '../work.interface';
export class WorkListService {
  work : Work[] = [
    {
      title: 'Service design',
      slug: 'service-design',
      overviewPicture: '/assets/work1.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'asdf design',
      slug: 'service-design',
      overviewPicture: '/assets/work1.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'TEST design',
      slug: 'service-design',
      overviewPicture: '/assets/work1.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'fffff design',
      slug: 'service-design',
      overviewPicture: '/assets/work1.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    }];
  getAll():Work[] {
    return this.work;
  }

  get(slug : string) {
    return this.work.filter((work) => work.slug === slug);
  }
}
