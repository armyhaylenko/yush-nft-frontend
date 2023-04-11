import React from 'react'
import './styles.css'
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Header() {
    const pages = ['Discover', 'About', 'Artists',  'Help'];
return (
    <div className="header">
        <div className="logo">
            <div className="female"/>
            <div className="name">
                YUSH
            </div>
        </div>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',
                    justifyContent: 'center' }}}>
                {pages.map((page) => (
                    <Button
                        key={page}
                        sx={{ my: 2,
                            color: '#554D4D',
                            display: 'block',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '24px'
                        }}
                    >
                        {page}
                    </Button>
                ))}
            </Box>
            <Button className='help' variant="outlined" sx={{ my: 2,
                color: '#FC6327',
                display: 'block',
                fontFamily: 'Nunito, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '22px',
                borderRadius:'8px',
                border: '1px solid #FC6327',
                marginRight:'167px',

            }}>Connect Wallet</Button>
    </div>
);
}