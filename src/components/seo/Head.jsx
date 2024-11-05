import { Helmet, HelmetData } from 'react-helmet-async';

const helmetData = new HelmetData({});
export const Head = ({ title = '', description = '' }) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `JVEC Solutions | ${title}` : undefined}
      defaultTitle="JVEC Solutions | Leading Cybersecurity & ICT Services"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
