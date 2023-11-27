import React, { forwardRef } from "react";
import { motion } from "framer-motion";

const AnimateBox = forwardRef(({ children }, ref) => {
  return <motion.div ref={ref}>{children}</motion.div>;
});

export default AnimateBox;
