import { AppBar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import Logo from '@/assets/logo.png';
import styles from './header.module.scss';

const Header = () => {
  const { user } = useSelector((state: RootState) => state.user)
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        zIndex: 1201,
      }}
      className={`${styles.header}`}>
        <div className={`${styles.headerLogo}`}>
          <img src={Logo} />
        </div>
        <div className={`${styles.headerUser}`}>
          <div className={`${styles.headerBranch}`}>
            <Select
              size="small"
              value={1}
              label="branch"
              sx={{
                minWidth: 160,
                height: 36,
                fontSize: 14,
                marginRight: '20px',
                color: '#014830',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#014830',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#014830',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#014830',
                },
                '& .MuiSvgIcon-root': {
                  color: '#014830',
                },
              }}
            >
              <MenuItem value={1}>South Beach Branch</MenuItem>
              <MenuItem value={2}>Downtown Branch</MenuItem>
              <MenuItem value={3}>North Beach Branch</MenuItem>
            </Select>
          </div>
          <PersonIcon sx={{ color: '#014830' }} />
          <div className={`${styles.headerUserInfo}`}>
            <span className={`${styles.headerUserName}`}>{user?.name}</span>
            <span className={`${styles.headerUserRole}`}>{user?.role}</span>
          </div>
        </div>
    </AppBar>
  );
};

export default Header;