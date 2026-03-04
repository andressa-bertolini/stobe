import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store';
import ZoomImage from '@/components/ZoomImage';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/global.module.scss';
import { fetchMenu } from "./menu.service";

const Menu = () => {  
  const dispatch = useDispatch<AppDispatch>();  
  const { menu } = useSelector((state: RootState) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu({ page: 1, pageSize: 20 }));
  },[]);

  return (
    <MainLayout>
      <Grid container spacing={2} alignItems="center"
        sx={{
          marginBottom: '10px'
        }}
      >
        <Grid>
          <h1 className={styles.title}>Sales Menu</h1>
        </Grid>
        <Grid>
          <Button variant="text" 
            sx={{
              backgroundColor: 'var(--green-500)',
              color: 'white'
            }}
          >
            Add Item
          </Button>
        </Grid>
        <table className={styles.table}>
          <thead>
            <tr>
              <th style={{width: '30px'}}>&nbsp;</th>
              <th colSpan={2}>Item</th>
              <th style={{textAlign: 'center'}}>Ingredients</th>
              <th style={{textAlign: 'center'}}>Sales Price</th>
              <th style={{width: '25px'}}>&nbsp;</th>
              <th style={{width: '25px'}}>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {menu?.map((item) => (
              <tr key={item?.id}>
                <td><Checkbox sx={{padding: 0}}/></td>
                <td style={{width: '30px'}}>
                  <ZoomImage src={item?.image} alt={item?.name} />
                </td>
                <td>{item?.name}</td>
                <td style={{textAlign: 'center'}}>{item?.packSize}</td>
                <td style={{textAlign: 'center'}}>${item?.price}</td>
                <td><EditIcon /></td>
                <td><DeleteIcon /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Grid>
    </MainLayout>
  );
};

export default Menu;