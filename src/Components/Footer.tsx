
import Grid from '@mui/material/Grid2';
import Transition from "./Transition";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
  <Grid size={6}>
    <Item className="footerItem">Footer</Item>
  </Grid>
  <Grid size={4}>
    <Item className="footerItem">Social Media</Item>
  </Grid>
  <Grid size={3}>
  </Grid>
  <Grid size={6}>
    <Item className="footerItem">Contact</Item>
  </Grid>
</Grid>
</Box>
    </div>

  );
};

export default Transition(Footer);