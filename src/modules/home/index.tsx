import { useSelector } from 'react-redux'
import type { RootState } from '@/store'

import MainLayout from '@/layouts/MainLayout';

const HomePage = () => {
  const { user, loading } = useSelector((state: RootState) => state.user)
  
  return (
    <MainLayout>nome:{user?.name}</MainLayout>
  );
};

export default HomePage;