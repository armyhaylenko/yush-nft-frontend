import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './styles.css'

export default function SecondPage() {
    const [expanded, setExpanded] = React.useState<string | false>('panel1');

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
        setExpanded(newExpanded ? panel : false);
      };
return (

 <section id="About" className='accordion-section'>
     <div className='picture'>
         
     </div>
     <div className='accordion-wrapper'>
     <Accordion className="accordion"  expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        borderTop: 'solid #9E9E9E 1px',
        borderRadius: 'inherit',
     }}
     >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='question'>What’s an NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{
            fontFamily: 'Nunito',
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#554D4D'}}>
          Much like an autographed book or a rare coin, NFTs (non-fungible tokens) are unique digital items that cannot be easily exchanged for something of similar value, simply because their distinctive properties make them one-of-a-kind. Since no two NFTs are exactly alike, their value is based on the rarity of the item and the community driving it.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        borderTop: 'solid #9E9E9E 1px',
        borderRadius: 'inherit',
     }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='question'>What makes YUSH NFT special?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{
            fontFamily: 'Nunito',
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#554D4D'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{ backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        borderTop: 'solid #9E9E9E 1px',
        borderRadius: 'inherit',
     }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='question'>Who’s the team behind YUSH NFT?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{
            fontFamily: 'Nunito',
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#554D4D'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion className="accordion" expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{ backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        borderTop: 'solid #9E9E9E 1px',
        borderBottom: 'solid #9E9E9E 1px',
        borderRadius: 'inherit',
     }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className='question'>And one more question</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{
            fontFamily: 'Nunito',
            fontWeight: 300,
            fontSize: '12px',
            lineHeight: '16px',
            color: '#554D4D'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

 </section>
);
}