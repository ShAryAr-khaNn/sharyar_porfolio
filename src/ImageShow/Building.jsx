import building1 from '../Images/BUILDINGELECTRICIAN.jpg';
import DocumentGallery from '../components/DocumentGallery';

function Building() {
  return (
    <DocumentGallery
      title="Building Electrician Course"
      subtitle="NAVTTC"
      images={[{ src: building1, alt: 'Building electrician course certificate' }]}
    />
  );
}

export default Building;
