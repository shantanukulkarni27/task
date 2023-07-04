import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const TrialCard = (props) => {
    return (
        <>
                    <Card style={{ background: '#7ac0ce', margin: '15px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                       {props.title}
                    </Typography>
                </CardContent>
            </Card>
        </>
    )
}

export default TrialCard;