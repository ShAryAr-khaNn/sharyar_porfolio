import { Link } from 'react-router-dom';
import PageHeader from './PageHeader';

function NotFound() {
  return (
    <PageHeader eyebrow="404" title="This page doesn't exist">
      <p>The link may be broken or the page may have moved.</p>
      <Link to="/" className="btn-primary mt-8">Back to home</Link>
    </PageHeader>
  );
}

export default NotFound;
