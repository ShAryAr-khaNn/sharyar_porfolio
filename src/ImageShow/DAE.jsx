import dae1 from '../Images/DAE1.jpg';
import dae2 from '../Images/DAE2.jpg';
import dae3 from '../Images/DAE3.jpg';
import DocumentGallery from '../components/DocumentGallery';

function DAE() {
  return (
    <DocumentGallery
      title="Associate Degree in Electrical Technology"
      subtitle="Kamra Polytechnic Institute, 2016 – 2019"
      images={[
        { src: dae1, alt: 'DAE document 1' },
        { src: dae2, alt: 'DAE document 2' },
        { src: dae3, alt: 'DAE document 3' },
      ]}
    />
  );
}

export default DAE;
