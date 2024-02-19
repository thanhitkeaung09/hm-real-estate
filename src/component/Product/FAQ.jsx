import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <div className="border my-20 w-[80%]">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {" "}
            Which are the popular electric cars in Myanmar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Top 3 popular electric cars in Myanmar are Tata Nexon EV, Tata Tiago
            EV and MG Comet EV. To checkout the complete list of electric cars,
            click here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>
            Are there any hybrid cars available in Myanmar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. There are hybrid cars available in Myanmar. Top 3 hybrid cars
            are Maruti Suzuki Grand Vitara, Toyota Urban Cruiser Hyryder and
            Toyota Innova Hycross. To checkout the complete list of hybrid cars,
            click here
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>
            Are there any upcoming electric cars in Myanmar
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes. There are upcoming electric cars in Myanmar. Tata Harrier EV,
            Tata Altroz EV and Tesla Model 3 are the upcoming electric cars
            which are planned to launch soon in Myanmar. To checkout the complete
            list of all electric cars, click here
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FAQ;
