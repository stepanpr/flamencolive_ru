import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function createData(event: string, date: string, passed: boolean) {
    return { event, date, passed };
}

const rows = [
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Ученых', '02/12/1988', false),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', false),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', false),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Музыки', '02/12/1988', true),
    createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', true),
	createData('Дом Ученых', '02/12/1988', false),
	createData('Дом Ученых', '02/12/1958', true),
];

export const EventsTable = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event.target.value);
        setPage(0);
        setRowsPerPage(+event.target.value);
    };
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 600 }}>
                <Table stickyHeader sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Event</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                            <TableRow hover key={row.event} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">
                                    {row.event}
                                </TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.passed ? 'yes' : 'no'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
