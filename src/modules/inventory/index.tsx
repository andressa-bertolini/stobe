import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@/store';
import formatCurrency from '@/utils/formatCurrency';
import getStockStatus from '@/utils/getStockStatus';
import ZoomImage from '@/components/ZoomImage';
import { useParams } from 'react-router-dom';

import { LinearProgress, Grid, Button, Checkbox, Pagination } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/global.module.scss';
import { StockIndicator } from "./components/StockIndicator";
import { fetchInventory } from "./inventory.service";

const Inventory = () => {
  const dispatch = useDispatch<AppDispatch>();  
  const { inventory, loading, totalPages } = useSelector((state: RootState) => state.inventory);
  const { branchId } = useParams();
  const [page, setPage] = useState(1);
  const prevBranchId = useRef(branchId);

  const handleChangePage = (
    _: React.ChangeEvent<unknown>,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  useEffect(() => {
    const branchChanged = prevBranchId.current !== branchId;
    prevBranchId.current = branchId;
  
    if (branchChanged) setPage(1);
  
    dispatch(fetchInventory({ 
      branchId: Number(branchId), 
      page: branchChanged ? 1 : page, 
      pageSize: 10 
    }));
  }, [branchId, page]);

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
            <th style={{width: '150px', textAlign: 'center'}}>Stock Status</th>
            <th style={{width: '150px', textAlign: 'center'}}>Price</th>
            <th style={{width: '25px'}}>&nbsp;</th>
            <th style={{width: '25px'}}>&nbsp;</th>
          </tr>
        </thead>
        {loading.list && 
          <tr>
            <td colSpan={10}>
              <LinearProgress />
            </td>
          </tr>
        }
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
              <td>
                <div style={{marginLeft: '30px'}}>
                  <StockIndicator status={getStockStatus(item?.inStock, item?.minStock)}/>
                </div>
              </td>
              <td style={{textAlign: 'center'}}>$ {formatCurrency(item?.price)}</td>
              <td><EditIcon sx={{ color: 'var(--green-500)' }} /></td>
              <td><DeleteIcon sx={{ color: 'var(--green-500)' }} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <Pagination 
          color="primary"
          count={totalPages}
          page={page}
          onChange={handleChangePage}
        />
      </div>
    </MainLayout>
  );
};

export default Inventory;
