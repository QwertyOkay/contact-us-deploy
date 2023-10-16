import { Helmet } from 'react-helmet-async';

const TITLE = 'Contact us';
const CONTENT = 'Contact us page';

function HelmetHead() {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta name="description" content={CONTENT} />
    </Helmet>
  );
}

export default HelmetHead;
