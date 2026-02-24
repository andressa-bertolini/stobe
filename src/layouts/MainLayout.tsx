import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCurrentUser } from '@/modules/users/users.slice'
import type { AppDispatch } from '@/store'
import type { ReactNode } from 'react'

import { Box } from "@mui/material";
import Header from './Header';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box sx={{ flex: 1, p: 2 }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;