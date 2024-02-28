import "./portfolio.scss";
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const itemData = [
  {
    img: 'public/portfolio/AppleOpdrachtgoe.jpg',
    title: 'Apple Design Challenge',
    author: 'Apple Design Challenge',
  },
  {
    img: 'public/portfolio/AR2.jpg',
    title: 'AR',
    author: 'Design AR public transport',
  },
  {
    img: 'public/portfolio/buddy_iphone.png',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'public/portfolio/design_groente_app.jpg',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'public/portfolio/game_overview.png',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'public/portfolio/ipmedt_full.png',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'public/portfolio/ipmedt_zwem_desk_welkom.png',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'public/portfolio/ipmedt2_quiz_start.png',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'public/portfolio/ipmedt3_vr_overview.png',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'public/portfolio/php_home.png',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'public/portfolio/w2p_home.png',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio">
      <div className="wrapper">
      <h1>Portfolio</h1>
      {/* < sx={{ width: 1400, height: 900, overflowY: 'scroll' }}> */}
      <Box sx={{ width: 1400, height: 900, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>


       
      </div>
    </div>
  );
};

export default Portfolio;