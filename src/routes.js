// import PageNotFoundPage from './_components/page-not-found';
import { MainPage, LocationPage, ClassPage, AmrapPage, PlacePage, RajajinagarPage, ContactPage, AboutPage, CareersPage, FormPage, OwnGymPage, GalleryPage, PrivacyPolicyPage, TermsConditionsPage, InstructorsPage, PanathurPage, ForumPage, SarjapurPage, KumaraParkPage, BellandurPage, GirinagarPage, RajajinagarClass, BellandurClass, PanathurClass, VrClass, ForumClass, GirinagarClass} from './_components/pages/index';
import KumarParkClass from './_components/pages/class/kumarpark-class';
import JayanagarPage from './_components/pages/gyms/jayanagar';
import ElectronicCityPage from './_components/pages/gyms/e-city';
import HSRLayoutPage from './_components/pages/gyms/hsr-layout';

const routes = [
  { path: '/', exact: true, name: 'Home', component: MainPage },
  { path: '/location',name:'Location',component:LocationPage},
  { path: '/classes',name:'Classes',component:ClassPage},
  { path: '/class/amrap',name:'Amrap',component:AmrapPage},
  { path: '/class/rajajinagar-class',name:'rajajinagar-class',component:RajajinagarClass},
  { path: '/class/bellandur-class',name:'bellandur-class',component:BellandurClass},
  { path: '/class/panathur-class',name:'panathur-class',component:PanathurClass},
  { path: '/class/kumarpark-class',name:'kumarpark-class',component:KumarParkClass},
  { path: '/class/vr-class',name:'vr-class',component:VrClass},
  { path: '/class/girinagar-class',name:'girinagar-class',component:GirinagarClass},
  { path: '/class/forum-class',name:'forum-class',component:ForumClass},
  { path: '/gyms/vr',name:'vr',component:PlacePage},
  { path: '/gyms/rajajinagar',name:'rajajinagar',component:RajajinagarPage},
  { path: '/gyms/panathur',name:'panathur',component:PanathurPage},
  { path: '/gyms/forum',name:'forum',component:ForumPage},
  { path: '/gyms/jayanagar',name:'jayanagar',component:JayanagarPage},
  { path: '/gyms/e-city',name:'electronic city',component:ElectronicCityPage},
  { path: '/gyms/hsr-layout',name:'hsr layout',component:HSRLayoutPage},
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