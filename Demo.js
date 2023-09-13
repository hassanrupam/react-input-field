import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import CloseIcon from '@mui/icons-material/Close';

export default function CustomizedInputBase() {
  const [msisdn, setMsisdn] = useState('');

  return (
    <div
      style={{
        background: '#F1F5F9 0% 0% no-repeat padding-box',
        display: 'flex',
        justifyContent: 'center',
        padding: '5rem 20rem 40rem 0rem',
      }}
    >
      <Paper
        component="form"
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 300,
          borderRadius: '40px',
        }}
      >
        <IconButton sx={{ p: '12px' }} aria-label="wallet no">
          <AppsIcon sx={{ color: '#999999' }} />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <InputBase
          id={'wallet'}
          sx={{ ml: 1 }}
          placeholder="Wallet No. (msisdn)"
          inputProps={{ 'aria-label': 'wallet no' }}
          onChange={(e) => {
            setMsisdn(e.target.value);
          }}
          value={msisdn}
        />
        {msisdn.length > 0 && (
          <IconButton
            type="button"
            sx={{ p: '4px' }}
            aria-label="clear"
            size={'small'}
            onClick={() => {
              setMsisdn('');
              document.getElementById('wallet').focus();
            }}
          >
            <CloseIcon sx={{ color: '#999999' }} fontSize="small" />
          </IconButton>
        )}
      </Paper>
    </div>
  );
}
