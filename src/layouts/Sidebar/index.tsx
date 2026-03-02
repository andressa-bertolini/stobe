import { Drawer } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StorefrontIcon from '@mui/icons-material/Storefront';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './sidebar.module.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const { branchId } = useParams();

  return (
    <Drawer 
      variant="permanent"
      sx={{
        top: '48px',
        [`& .MuiDrawer-paper`]: { 
          width: '250px', 
          backgroundColor: 'var(--green-700)',
          top: '48px',
          boxSizing: 'border-box'
        },
      }}
      className={styles.sidebar}>

        <List sx={{
          color: '#fff',
          '& .MuiListItemIcon-root': {
            color: 'inherit',
          },
          '& .MuiDivider-root': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }
        }}>
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ pl: 4, backgroundColor: 'var(--green-300)' }}
              onClick={() => navigate(`/${branchId}`)}
            >
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem 
            disablePadding
            sx={{ pl: 2, pt: 1, pb: 1 }}
          >
            <ListItemIcon>
              <InventoryIcon/>
            </ListItemIcon>
            <ListItemText primary='Stock' />
          </ListItem>
          <List disablePadding>
            <ListItemButton 
              sx={{ pl: 4, backgroundColor: 'var(--green-300)' }}
              onClick={() => navigate(`/stock/products/${branchId}`)}
            >
              <ListItemIcon>
                <LocalOfferIcon/>
              </ListItemIcon>
              <ListItemText primary='Products' />
            </ListItemButton>
          </List>
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ pl: 4, backgroundColor: 'var(--green-300)' }}
              onClick={() => navigate(`/stock/movements/${branchId}`)}
            >
              <ListItemIcon>
                <SyncAltIcon/>
              </ListItemIcon>
              <ListItemText primary='Movements' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem 
            disablePadding
            sx={{ pl: 2, pt: 1, pb: 1 }}
          >
            <ListItemIcon>
              <AttachMoneyIcon/>
            </ListItemIcon>
            <ListItemText primary='Sales' />
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ pl: 4, backgroundColor: 'var(--green-300)' }}
              onClick={() => navigate(`/sales/menu/${branchId}`)}
            >
              <ListItemIcon>
                <MenuBookIcon/>
              </ListItemIcon>
              <ListItemText primary='Menu' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ pl: 4, backgroundColor: 'var(--green-300)' }}
              onClick={() => navigate(`/sales/orders/${branchId}`)}
            >
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary='Orders' />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
    </Drawer>
  );
};

export default Sidebar;