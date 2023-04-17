import FontsAndFavicons from '@/common/components/FontsAndFavicons/FontsAndFavicons';

const CommonInclusionLayout = ({ children }) => {
  return (
    <>
      <FontsAndFavicons />
      {children}
    </>
  );
};

export default CommonInclusionLayout;
