import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Câu hỏi 1
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Có hỗ trợ thuê khác sạn hay không?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Khi các bạn sử dụng dịch vụ của chúng tôi, chúng tôi sẽ mang đến trải nghiệm tuyệt vời nhất.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Câu hỏi 2
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Có hỗ trợ thuê khác sạn hay không?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Khi các bạn sử dụng dịch vụ của chúng tôi, chúng tôi sẽ mang đến trải nghiệm tuyệt vời nhất.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Câu hỏi 3
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Có hỗ trợ thuê khác sạn hay không?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Khi các bạn sử dụng dịch vụ của chúng tôi, chúng tôi sẽ mang đến trải nghiệm tuyệt vời nhất.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Câu hỏi 4
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Có hỗ trợ thuê khác sạn hay không?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             Khi các bạn sử dụng dịch vụ của chúng tôi, chúng tôi sẽ mang đến trải nghiệm tuyệt vời nhất.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}