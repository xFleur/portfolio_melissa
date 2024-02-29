import "./portfolio.scss";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemData = [
  {
    img: '/portfolio/AppleOpdrachtgoe.jpg',
    title: 'Apple Design Challenge',
    author: 'Apple Design Challenge',
  },
  {
    img: '/portfolio/AR2.jpg',
    title: 'AR',
    author: 'Design AR public transport',
  },
  {
    img: '/portfolio/buddy_iphone.png',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: '/portfolio/design_groente_app.jpg',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: '/portfolio/game_player.png',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: '/portfolio/ipmedt_full.png',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: '/portfolio/ipmedt_zwem_desk_welkom.png',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: '/portfolio/ipmedt2_quiz_start.png',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: '/portfolio/ipmedt3_vr_overview.png',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: '/portfolio/study_php2.png',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: '/portfolio/share_php1.png',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/portfolio/it_chal_quest_hardw.png',
    title: 'Coffee',
    author: 'Hutomo Abrianto',
  },
  {
    img: '/portfolio/gen_home.png',
    title: 'Coffee2',
    author: 'Hutomo Abrianto',
  },
];

const Portfolio = () => {
  const ref = useRef();
  
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
    ref={ref}
    className="portfolio"
    variants={variants}
    initial="initial"
    whileInView="animate"
  >

   
      <div className="wrapper">
      <h1>Portfolio</h1>
      {/* < sx={{ width: 1400, height: 900, overflowY: 'scroll' }}> */}
      <Box sx={{ width: 1400, height: expanded ? 'auto' : 900, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
      </ImageList>
    </Box>
      </div>
      </motion.div>
  );
};

export default Portfolio;