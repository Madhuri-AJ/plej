// import PageNotFoundPage from './_components/page-not-found';
import { MainPage, LocationPage, ClassPage, AmrapPage, PlacePage, ContactPage, AboutPage, CareersPage, FormPage, OwnGymPage, GalleryPage, PrivacyPolicyPage, TermsConditionsPage, InstructorsPage} from './_components/pages/index';

const routes = [
  { path: '/', exact: true, name: 'Home', component: MainPage },
  { path: '/location',name:'Location',component:LocationPage},
  { path: '/classes',name:'Classes',component:ClassPage},
  { path: '/class/amrap',name:'Amrap',component:AmrapPage},
  { path: '/gyms/place',name:'place',component:PlacePage},
  { path: '/contact-us',name:'Contact-Us',component:ContactPage},
  { path: '/about',name:'About',component:AboutPage},
  { path: '/careers',name:'Career',component:CareersPage},
  { path: '/careers-form',name:'Career-form',component:FormPage},
  { path: '/owngym',name:'OwnGym',component:OwnGymPage},
  { path: '/gallery',name:'Gallery',component:GalleryPage},
  { path: '/privacy-policy',name:'Gallery',component:PrivacyPolicyPage},
  { path: '/terms-conditions',name:'Gallery',component:TermsConditionsPage},
  { path: '/instructors',name:'Gallery',component:InstructorsPage}
//   { path: '**', exact: true, name: '', component: PageNotFoundPage }
];

export default routes;