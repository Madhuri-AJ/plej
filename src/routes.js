// import PageNotFoundPage from './_components/page-not-found';
import { MainPage, LocationPage, ClassPage, AmrapPage, PlacePage, RajajinagarPage, ContactPage, AboutPage, CareersPage, FormPage, OwnGymPage, GalleryPage, PrivacyPolicyPage, TermsConditionsPage, InstructorsPage, PanathurPage, ForumPage, SarjapurPage, KumaraParkPage, BellandurPage, GirinagarPage} from './_components/pages/index';

const routes = [
  { path: '/', exact: true, name: 'Home', component: MainPage },
  { path: '/location',name:'Location',component:LocationPage},
  { path: '/classes',name:'Classes',component:ClassPage},
  { path: '/class/amrap',name:'Amrap',component:AmrapPage},
  { path: '/gyms/vr',name:'vr',component:PlacePage},
  { path: '/gyms/rajajinagar',name:'rajajinagar',component:RajajinagarPage},
  { path: '/gyms/panathur',name:'panathur',component:PanathurPage},
  { path: '/gyms/forum',name:'forum',component:ForumPage},
  { path: '/gyms/sarjapur',name:'sarjapur',component:SarjapurPage},
  { path: '/gyms/kumarapark',name:'kumarapark',component:KumaraParkPage},
  { path: '/gyms/bellandur',name:'bellandur',component:BellandurPage},
  { path: '/gyms/girinagar',name:'girinagar',component:GirinagarPage},
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