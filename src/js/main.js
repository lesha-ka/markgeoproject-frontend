import './vendor';
import './helpers';
import './components/social';
import {ieFix} from './vendor/ie-fix';
import {vhFix} from './vendor/vh-fix';
import header from './components/header';
import preloader from './components/preloader';
import mapInteractive from './modules/mapInteractive';
import otzyvStars from './modules/otzyvStars';
import formCheckbox from './modules/formCheckbox';
import imgShowAnimate from './modules/imgShowAnimate';
import faqInteractive from './modules/faqInteractive';
import watchPopup from './modules/watchPopup';
import googleMap from './modules/googleMap';
import licenseNav from './modules/licenseNav';
import lazyLoading from './modules/lazyLoading';
import sliderPreset from './modules/sliderPreset';


ieFix();
vhFix();
preloader.init();
imgShowAnimate.init();
mapInteractive.init();
sliderPreset.init();
otzyvStars.init();
formCheckbox.init();
faqInteractive.init();
licenseNav.init();
googleMap.init();
watchPopup.init();

header.init();
lazyLoading.init();