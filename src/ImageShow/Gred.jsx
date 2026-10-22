import gred1 from '../Images/gred.jpg';
import gred2 from '../Images/gred1.jpg';
import DocumentGallery from '../components/DocumentGallery';

function Gred() {
  return (
    <DocumentGallery
      title="BS Computer Science"
      subtitle="PMAS Arid Agriculture University, Rawalpindi, 2019 – 2023"
      images={[
        { src: gred1, alt: 'BS Computer Science transcript' },
        { src: gred2, alt: 'BS Computer Science document' },
      ]}
    />
  );
}

export default Gred;
