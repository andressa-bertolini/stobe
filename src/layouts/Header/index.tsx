import { AppBar } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import type { SelectChangeEvent } from '@mui/material/Select';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux'
import type { RootState } from '@/store';
import { useParams, useNavigate } from 'react-router-dom';
import Logo from '@/assets/logo.png';
import styles from './header.module.scss';

const Header = () => {
  const { branchId } = useParams();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.user);

  const handleBranchChange = (event: SelectChangeEvent) => {
    navigate(`/${event.target.value}`, { replace: true });
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        zIndex: 1201,
      }}
      className={styles.header}>
        <div className={styles.headerLogo}>
          <img src={Logo} />
        </div>
        <div className={styles.headerUser}>
          <div className={styles.headerBranch}>
            <Select
              size="small"
              value={branchId}
              onChange={handleBranchChange}
              sx={{
                minWidth: 160,
                height: 36,
                fontSize: 14,
                marginRight: '20px',
                color: 'var(--green-500)',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--green-500)',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--green-500)',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--green-500)',
                },
                '& .MuiSvgIcon-root': {
                  color: 'var(--green-500)',
                },
              }}
            >
              <MenuItem value={1}>South Beach Branch</MenuItem>
              <MenuItem value={2}>Downtown Branch</MenuItem>
              <MenuItem value={3}>North Beach Branch</MenuItem>
            </Select>
          </div>
          <PersonIcon sx={{ color: 'var(--green-500)' }} />
          <div className={styles.headerUserInfo}>
            <span className={styles.headerUserName}>{user?.name}</span>
            <span className={styles.headerUserRole}>{user?.role}</span>
          </div>
        </div>
    </AppBar>
  );
};

export default Header;