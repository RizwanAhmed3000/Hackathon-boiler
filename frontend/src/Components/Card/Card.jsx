import "./card.css"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import tech_Company from '../../assets/tech_Company.png'
import { Avatar } from '@mui/material';
import { useSelector } from "react-redux";


export default function ImgMediaCard({ user }) {
    return (
        <>
            <div className="cContainer">
                <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 200, height: 200 }}
                />
                <div className="userInfo">
                    <span className='uName'>
                        <h4>
                            Student Name: <span>{`${user.firstname} ${user.lastname}`}</span>
                        </h4>
                    </span>
                    <span className='uId'>
                        <h4>
                            Student Id: <span>{`${user.studentId}`}</span>
                        </h4>
                    </span>
                    <span className='uEmail'>
                        <h4>
                            Student Email: <span>{`${user.email}`}</span>
                        </h4>
                    </span>
                    <span className='uCourse'>
                        <h4>
                            Student Course: <span>{`${user.course}`}</span>
                        </h4>
                    </span>
                </div>
            </div>
        </>
        // <Card sx={{ maxWidth: 345 }}>
        //     <CardMedia
        //         component="img"
        //         alt="green iguana"
        //         height="140"
        //         image={tech_Company}
        //     />
        //     <CardContent>
        //         <Typography gutterBottom variant="h5" component="div">
        //             Lizard
        //         </Typography>
        //         <Typography variant="body2" color="text.secondary">
        //             Lizards are a widespread group of squamate reptiles, with over 6,000
        //             species, ranging across all continents except Antarctica
        //         </Typography>
        //     </CardContent>
        //     <CardActions>
        //         <Button size="small">Share</Button>
        //         <Button size="small">Learn More</Button>
        //     </CardActions>
        // </Card>
    );
}