import { AppBar, Toolbar, Button } from "@mui/material";


const HeadingBar = () => {
    return (
        <AppBar style={{ marginTop: 30, flex: 6, height: "100px" }} position="static" >
            <Toolbar>
                <Button style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }} color="inherit" >
                    ID
                </Button>
                <Button color="inherit" >
                    Profile Image
                </Button>
                <Button color="inherit">
                    Name
                </Button>
                <Button color="inherit">
                    Course
                </Button>
            </Toolbar>
        </AppBar >
    )
}

export default HeadingBar;
