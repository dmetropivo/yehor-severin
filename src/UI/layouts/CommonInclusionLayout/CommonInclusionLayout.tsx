import FontsAndFavicons from '@/common/components/FontsAndFavicons/FontsAndFavicons';
import { FC, ReactNode } from 'react';

interface ICommonInclusionLayout {
  children: ReactNode;
}

const CommonInclusionLayout: FC<ICommonInclusionLayout> = ({ children }) => {
  return (
    <>
      <FontsAndFavicons />
      {children}
    </>
  );
};

export default CommonInclusionLayout;
