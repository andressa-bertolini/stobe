import { Box } from "@mui/material";
import Header from './Header';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
    </Box>
  );
};

export default MainLayout;