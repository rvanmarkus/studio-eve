import { Work } from '../work.interface';
export class WorkListService {
  work : Work[] = [
    {
      title: 'Strategic design',
      slug: 'work-strategic-design-',
      overviewPicture: '/assets/Infographic_Afstudeer.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'Service design',
      slug: 'work-service-design',
      overviewPicture: '/assets/Poolpro_beginfoto.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'Visual communication',
      slug: 'work-visual-communication',
      overviewPicture: '/assets/Beyond_words_mag.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'Graphic desgin',
      slug: 'work-graphic-design',
      overviewPicture: '/assets/Joanna_beginfoto.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
     {
      title: 'Creative workshops',
      slug: 'work-creative-workshops',
      overviewPicture: '/assets/Service_design_beginscherm.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'Creative startup process',
      slug: 'work-creative-startup',
      overviewPicture: '/assets/Sessie_Beginfotos.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
{
      title: 'Graphic design',
      slug: 'work-graphic-design-patterns',
      overviewPicture: '/assets/Beginscherm_WORK_fotos.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'Infographic PET bottles',
      slug: 'work-infographic',
      overviewPicture: '/assets/Petflessen-infographic.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    },
    {
      title: 'Application',
      slug: 'work-Application',
      overviewPicture: '/assets/Applicatie_WORK_fotos.jpg',
      pictures: ['/assets/work1.jpg', '/assets/work2.jpg'],
      content: '<p>Lorem ipsum</p>'
    }
    ];
  getAll():Object[] {
    return this.work;
  }

  get(slug : string) {
    return this.work.filter((work) => work.slug === slug);
  }
}
