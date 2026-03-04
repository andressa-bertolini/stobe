import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store';
import formatCurrency from '@/utils/formatCurrency';
import ZoomImage from '@/components/ZoomImage';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/global.module.scss';
import { fetchInventory } from "./inventory.service";

const Inventory = () => {
  const dispatch = useDispatch<AppDispatch>();  
  const { inventory } = useSelector((state: RootState) => state.inventory);

  useEffect(() => {
    dispatch(fetchInventory({ page: 1, pageSize: 10 }));
  },[]);

  return (
    <MainLayout>
      <Grid container spacing={2} alignItems="center"
        sx={{
          marginBottom: '10px'
        }}
      >
        <Grid>
          <h1 className={styles.title}>Stock Inventory</h1>
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
      </Grid>
      <table className={styles.table}>
        <thead>
          <tr>
            <th style={{width: '30px'}}>&nbsp;</th>
            <th colSpan={2}>Item</th>
            <th>Supplier</th>
            <th style={{width: '150px', textAlign: 'center'}}>Pack Size</th>
            <th style={{width: '150px', textAlign: 'center'}}>In Stock</th>
            <th style={{width: '150px', textAlign: 'center'}}>Price</th>
            <th style={{width: '25px'}}>&nbsp;</th>
            <th style={{width: '25px'}}>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {inventory?.map((item) => (
            <tr key={item?.id}>
              <td><Checkbox sx={{padding: 0}}/></td>
              <td style={{width: '30px'}}>
                <ZoomImage src={item?.image} alt={item?.name} />
              </td>
              <td>{item?.name}</td>
              <td>{item?.supplier}</td>
              <td style={{textAlign: 'center'}}>
                {item?.packSize?.quantity}{' '}
                {item?.packSize?.unit}</td>
              <td style={{textAlign: 'center'}}>{item?.inStock}</td>
              <td style={{textAlign: 'center'}}>$ {formatCurrency(item?.price)}</td>
              <td><EditIcon /></td>
              <td><DeleteIcon /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </MainLayout>
  );
};

export default Inventory;