import { useSelector } from 'react-redux';
import type { RootState } from '@/store'

export const useBranchNavigation = () => {
  const branch = useSelector((state: RootState) => state.user.user.branches[0]);
  return branch;
};