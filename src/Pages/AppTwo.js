import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TrialCard from "../Components/TrialCard";


const AppTwo = () => {
  

    const rowOne = [
        {
            name: 'anc',
            age: 20,
            weight: 70,
            status: 'single',
            background:'green'
        },
        {
            name: 'jd',
            age: 40,
            weight: 90,
            status: 'married',
            background:'red'
        },
        {
            name: 'dkk',
            age: 23,
            weight: 60,
            status: 'commited',
            background:'yellow'
        },
        


    ];


    const rowTwo = [
        {
            name: 'kfkf',
            age: 30,
            weight: 70,
            status: 'dldl'
        },
        {
            name: 'kdkd',
            age: 30,
            weight: 92,
            status: 'married'
        },
        {
            name: 'dkdk',
            age: 43,
            weight: 60,
            status: 'commited'
        }


    ];

    const rowThree = [
        {
            name: 'addjjdnc',
            age: 20,
            weight: 20,
            status: 'single'
        },
        {
            name: 'dkdk',
            age: 40,
            weight: 90,
            status: 'married'
        },
        {
            name: 'aka',
            age: 23,
            weight: 60,
            status: 'commited'
        }


    ];

    const [state, setState] = useState(rowOne)

    const handleCardOne = (a) => {
        setState(a)
        console.log(a)
    }
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '27%' }} onClick={() => handleCardOne(rowOne)}>
                    <TrialCard title="One" />
                </div>
                <div style={{ width: '27%' }} onClick={() => handleCardOne(rowTwo)}>
                    <TrialCard title="Two" />
                </div>
                <div style={{ width: '27%' }} onClick={() => handleCardOne(rowThree)}>
                    <TrialCard title="Three" />
                </div>

            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Table sx={{ width: '70%', border: '2px solid black' }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell style={{ border: '1px solid black' }}>Name</TableCell>
                            <TableCell style={{ border: '1px solid black' }} align="right">Age</TableCell>
                            <TableCell style={{ border: '1px solid black' }} align="right">Weight</TableCell>
                            <TableCell style={{ border: '1px solid black' }} align="right">Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* <TableRow
                           
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell style={{border:'1px solid black'}} component="th" scope="row">
                                "abc"
                            </TableCell>
                            <TableCell style={{border:'1px solid black'}} align="right">"abc"
                            </TableCell>
                            <TableCell style={{border:'1px solid black'}}align="right">"abc"</TableCell>
                            <TableCell style={{border:'1px solid black'}}align="right">"abc"</TableCell>
                            <TableCell style={{border:'1px solid black'}}align="right">"abc"</TableCell>
                        </TableRow> */}
                        {
                            state.map((item) => (
                                <TableRow>
                                    <TableCell style={{ border: '1px solid black',background: item.background ? item.background : '' }} component="th" scope="row">
                                    {item.name}
                                    </TableCell>
                                    <TableCell style={{ border: '1px solid black' }} align="right">{item.age}
                                    </TableCell>
                                    <TableCell style={{ border: '1px solid black' }} align="right">{item.weight}</TableCell>
                                    <TableCell style={{ border: '1px solid black' }} align="right">{item.status}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>
                {/* <h1>{state}</h1> */}
            </div>
        </>
    )
}
export default AppTwo;