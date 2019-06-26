import ContentfulPreview from 'constants/ContentfulPreview';
import getUrlParam from 'utils/getUrlParam';

export default (): boolean => {
  return (
    getUrlParam(ContentfulPreview.PARAMETER) ===
    ContentfulPreview.EXPECTED_VALUE
  );
};
