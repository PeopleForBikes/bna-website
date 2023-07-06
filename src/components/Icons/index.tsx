import ArrowRight from './ArrowRight';
// import ArrowsMaximize from './ArrowsMaximize';
// import ArrowsMinimize from './ArrowsMinimize';
import Bars from './Bars';
import BNALogo from './BNALogo';
// import CircleInfo from './CircleInfo';
// import CirclePhone from './CirclePhone';
// import CommunityCare from './CommunityCare';
// import Envelope from './Envelope';
// import Facebook from './Facebook';
// import Instagram from './Instagram';
// import LayerDouble from './LayerDouble';
// import LinkedIn from './LinkedIn';
// import List from './List';
// import LocationDot from './LocationDot';
// import LocationPerson from './LocationPerson';
// import Map from './Map';
// import ObjectsColumn from './ObjectsColumn';
// import Print from './Print';
// import School from './School';
// import Search from './Search';
// import Spinner from './Spinner';
// import TrainSubway from './TrainSubway';
// import Tree from './Tree';
// import Twitter from './Twitter';
import Xmark from './Xmark';
// import Youtube from './Youtube';


type Props = {
  className?: string;
  name: string;
};

function Icons({ name, ...props }: Props): JSX.Element {
  const icons: Record<Props['name'], any> = {
    'arrow-right':          <ArrowRight {...props} />,
    // 'arrow-maximize':       <ArrowsMaximize {...props} />,
    // 'arrow-minimize':       <ArrowsMinimize {...props} />,
    'bars':                 <Bars {...props} />,
    'bna-logo':             <BNALogo {...props} />,
    // 'circle-info':          <CircleInfo {...props} />,
    // 'circle-phone':         <CirclePhone {...props} />,
    // 'community-care':       <CommunityCare {...props} />,
    // 'envelope':             <Envelope {...props} />,
    // 'facebook':             <Facebook {...props} />,
    // 'instagram':            <Instagram {...props} />,
    // 'layer-double':         <LayerDouble {...props} />,
    // 'linkedIn':             <LinkedIn {...props} />,
    // 'list':                 <List {...props} />,
    // 'location-dot':         <LocationDot {...props} />,
    // 'location-person':      <LocationPerson {...props} />,
    // 'map':                  <Map {...props} />,
    // 'objects-column':       <ObjectsColumn {...props} />,
    // 'print':                <Print {...props} />,
    // 'school':               <School {...props} />,
    // 'search':               <Search {...props} />
    // 'spinner':              <Spinner {...props} />
    // 'train-subway':         <TrainSubway {...props} />
    // 'tree':                 <Tree {...props} />
    // 'twitter':              <Twitter {...props} />
    'xmark':                <Xmark {...props} />
    // 'youtube':              <Youtube {...props} />
  };

  return icons[name];
}


export default Icons;
