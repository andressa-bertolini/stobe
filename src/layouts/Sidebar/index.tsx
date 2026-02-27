import { Drawer } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <Drawer 
      variant="permanent"
      sx={{
        top: '48px',
        [`& .MuiDrawer-paper`]: { 
          width: '250px', 
          backgroundColor: '#013b27',
          top: '48px',
          boxSizing: 'border-box'
        },
      }}
      className={`${styles.sidebar}`}>

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
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InventoryIcon/>
              </ListItemIcon>
              <ListItemText primary='Stock' />
            </ListItemButton>
          </ListItem>
          <List disablePadding>
            <ListItemButton sx={{ pl: 4, backgroundColor: '#015135' }}>
              <ListItemIcon>
                <InventoryIcon/>
              </ListItemIcon>
              <ListItemText primary="Inventory" />
            </ListItemButton>
          </List>
          <ListItem disablePadding>
            <ListItemButton sx={{ pl: 4, backgroundColor: '#015135' }}>
              <ListItemIcon>
                <SyncAltIcon/>
              </ListItemIcon>
              <ListItemText primary='Transactions' />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InventoryIcon/>
              </ListItemIcon>
              <ListItemText primary='Sales' />
            </ListItemButton>
          </ListItem>
        </List>
    </Drawer>
  );
};

export default Sidebar;