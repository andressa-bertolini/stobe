import { Grid, TextField, InputAdornment, Autocomplete } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styles from './filters.module.scss';

const Filters = ({filters}) => {
  return(
    <div className={styles.filters}>
      <Grid container spacing={2}>
        {filters.map((filter) => {
          switch(filter.type){
            case 'search':
              return(
                <Grid size={3}>
                  <TextField 
                    fullWidth
                    size="small"
                    label={filter.label}
                    InputLabelProps={{ shrink: true }}
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon color="primary" />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "var(--green-500)",
                        },
                        "&:hover fieldset": {
                          borderColor: "var(--green-500)",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--green-500)",
                        },
                      },
                    }}
                  />
                </Grid>
                );
            case 'autocomplete':
              return(
                <Grid size={3}>
                  <Autocomplete
                    options={filter.options || []}
                    fullWidth
                    size="small"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label={filter.label}
                        InputLabelProps={{ shrink: true }}
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                              borderColor: "var(--green-500)",
                            },
                            "&:hover fieldset": {
                              borderColor: "var(--green-500)",
                            },
                            "&.Mui-focused fieldset": {
                              borderColor: "var(--green-500)",
                            },
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                );
            default:
              return null;
          }
        })}
      </Grid>
    </div>
  )
}

export default Filters;