import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../widgets/root-layout';
import { EventsTable } from '../pages/events';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/about" element={<div>About</div>} />
            <Route path="/events" element={<EventsTable />} />
            <Route path="/contacts" element={<div>Contacts</div>} />
            {/* <Route path="/products/:productId" element={<Product />} /> */}
            <Route path="*" element={<div>not found</div>} />
        </Route>
    )
);

/** App */
const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
