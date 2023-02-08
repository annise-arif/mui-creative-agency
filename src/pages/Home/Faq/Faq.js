import { Box } from "@mui/system";
import React from "react";
import CreativeAccordion from "../../../components/CreativeAccordion/CreativeAccordion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <Box>
      <SectionTitle title="Frequently Asked" colored="Question" />
      <Box>
        <CreativeAccordion />
      </Box>
    </Box>
  );
};

export default Faq;
