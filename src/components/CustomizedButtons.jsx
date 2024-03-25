import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Icon, IconButton } from '@mui/material';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    backgroundColor:'#A88650',
    padding: '10px 16px',
    border: 'none',
    lineHeight: 1.25,
    maxHeight:'40px',
    color:"#fff",
    fontWeight:"500",
    fontFamily: [
        "Roboto","Helvetica","Arial","sans-serif"
    ].join(','),
    '&:hover': {
      boxShadow: 'none',
      backgroundColor:'#c69f62'
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor:'#A88650'

    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(198,159,98,.5)',
      backgroundColor:'#c69f62'

    },
  });

const BootstrapOutlinedButton = styled(BootstrapButton)({
  color: '#8D7855',
  border: 'solid 1px #8D7855',
  backgroundColor:'transparent',
  '&:hover': {
    backgroundColor: '8D7855',
    color: '#fff',
    borderColor: 'transparent',
  },
  '&:active': {
    color: '#fff',
    backgroundColor: '#A88650',
    borderColor: 'transparent',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(198,159,98,.5)',
  },
});

const BootstrapOutlinedButton2 = styled(BootstrapButton)({
    color: '#6B7280',
    border: 'solid 1px #9CA3AF',
    backgroundColor:'transparent',
    '&:hover': {
      backgroundColor: '#9CA3AF',
      color: '#fff',
      borderColor: 'transparent',
    },
    '&:active': {
      color: '#fff',
      backgroundColor: '#9CA3AF',
      borderColor: 'transparent',
    },
    '&:focus': {
        backgroundColor:'#9CA3AF',
      boxShadow: '0 0 0 0.2rem rgba(203, 203, 203, 0.5)',
    },
  });

function CustomizedButtons({ variant, children, color, icon, onClick, className }) {
  let ButtonComponent;
  if (variant === 'outlined') {
    ButtonComponent = BootstrapOutlinedButton;
  } else if (variant === 'third') {
    ButtonComponent = BootstrapOutlinedButton2;
  } else {
    ButtonComponent = BootstrapButton;
  }

  return (
    <ButtonComponent variant={variant} color={color} onClick={onClick} className={className} disableRipple>
      {icon && (
        <Icon sx={{mr:1}} color="inherit" size="small">
          {icon}
        </Icon>
      )}
      {children}
    </ButtonComponent>
  );
}

export default CustomizedButtons;
