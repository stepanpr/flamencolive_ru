import { Outlet } from 'react-router-dom';
import React from 'react';
import { Container } from '@mui/material';
import { Header } from './header';
import { Footer } from './footer';

export const RootLayout = () => {
    return (
        <>
            <Header />
            <Container component="main" maxWidth="lg" sx={{ mt: '20px', border: '1px solid red', minHeight: 600 }}>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
};
