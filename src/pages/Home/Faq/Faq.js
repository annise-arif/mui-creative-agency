import { Box } from "@mui/system";
import React from "react";
import CreativeAccordion from "../../../components/CreativeAccordion/CreativeAccordion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <SectionTitle title="Frequently Asked" colored="Question" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 5,
        }}
      >
        <CreativeAccordion
          title="How do I pay for the Essentials or Premium plan?"
          description="You can pay with a credit card or via net banking (if you are in United States). We will renew your subscription automatically at the end of every billing cycle."
        />
        <CreativeAccordion
          title="Can I cancel my Essentials or Premium plan subscribtion at any time?"
          description="You can pay with a credit card or via net banking (if you are in United States). We will renew your subscription automatically at the end of every billing cycle."
        />
        <CreativeAccordion
          title="We need to add new users to our team. How will that be billed?"
          description="You can pay with a credit card or via net banking (if you are in United States). We will renew your subscription automatically at the end of every billing cycle."
        />
        <CreativeAccordion
          title="Do you offer discounts for ono-profit organizations or educational institutions?"
          description="You can pay with a credit card or via net banking (if you are in United States). We will renew your subscription automatically at the end of every billing cycle."
        />
      </Box>
    </Box>
  );
};

export default Faq;
