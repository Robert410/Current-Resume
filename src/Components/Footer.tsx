
import Grid from '@mui/material/Grid2';
import Transition from "./Transition";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const Footer = () => {
  
  return (
    <div className="footer">
    <Box sx={{ flexGrow: 1 }}>
      <Grid border={1} container spacing={1}>
  <Grid size={4}>
    <Item className="footerItem">
      You can find me on:
      <br/>
      <FacebookIcon/>
      <InstagramIcon/>
      <LinkedInIcon/>
      <GitHubIcon/>
    </Item>
  </Grid>
  <Grid size={6}>
    <Item className="footerItem">Feel free to contact me:
      <br/>
      roberthostiuc@gmail.com or 
      +40 0754384708
    </Item>
  </Grid>
  <Grid size={6}>
    <Item className="footerItem">@2022 Hostiuc Robert Gabriel. All rights reserved.</Item>
  </Grid>
</Grid>
</Box>
    </div>

  );
};

export default Transition(Footer);