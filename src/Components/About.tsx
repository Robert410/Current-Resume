
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

const About = () => {
  
  return (
    <div className="contentPage">
      <div className="aboutMeContent">
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={15}>
      <Grid size={1}/>
  <Grid size={6}>
    <Item className='itemDisplayText'>I coordinated groups of 30 high school students for two years and taught them about NFS (Not for sale), presenting the risks of human trafficking and how to protect themselves. I helped them speak in front of a public audience, captivate their attention, remain calm, but also fight for their ideas.</Item>
  </Grid>
  <Grid size={4}>
    <Item className='itemDisplay'><img src="/img/vol2.jpg" alt="" className="itemImage"/></Item>
  </Grid>
  <Grid size={1}/><Grid size={1}/>
  <Grid size={4}>
    <Item className='itemDisplay'><img src="/img/vol4.jpg" alt="" className="itemImage"/></Item>
  </Grid>
  <Grid size={6}>
    <Item className='itemDisplayText'>Throughout my volunteering experience, I have grown personally, discovering how much I enjoy helping others and how passionate I am about speaking, explaining, and debating various topics. I volunteered across different areas, including visiting schools to teach students about various subjects (Internet Safety, Human Trafficking, Emotional Education, Healthy Living), as well as participating in and organizing small to large-scale charitable events (Marathons, Fundraisers, Escape Rooms, etc.).</Item>
  </Grid>
  <Grid size={1}/><Grid size={1}/>
    <Grid size={4}>
      <Item className='itemDisplayText'>I participated in team competitions, I created medium and large projects together with both strangers and friends and I organized various events (charity, marathons).</Item>
    </Grid>
    <Grid size={3}>
      <Item className='itemDisplay'><img src="/img/download.png" alt="" className="itemImage"/></Item>
    </Grid>
    <Grid size={3}>
      <Item className='itemDisplayText'>I held speeches in front of 100+ people about internet safety, human trafficking, but also about people and children’s rights.</Item>
    </Grid>
</Grid>
</Box>
</div>
    </div>

  );
};

export default Transition(About);