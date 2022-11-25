import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';
import { Accordion, Typography, AccordionDetails, AccordionSummary, Slider, TextField, Pagination } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';

import Stack from '@mui/material/Stack';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import ProductCard from './ProductCard';

import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

const categories = [
    "Women Tops",
    "Women Bottoms",
    "Women Dresses",
    "Women Bags",
    "Women Shoes",
    "Women Accessories",
    "Men Tops",
    "Men Bottoms",
    "Men Formal Wear",
    "Men Bags",
    "Men Shoes",
    "Men Accessories",
    "Kid Tops",
    "Kids Bottoms",
    "Kid Bags",
    "Kid Shoes",
    "Kid Baby Products",
    "Kid Toys",
    "Home & Living",
    "Electronics",
    "Furniture",
    "Kitchenware",
    "Outdoor & Garden",
]

export const Carousel = (props) => {

    const {children, show} = props

    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [length, setLength] = React.useState(children.length)

    const [touchPosition, setTouchPosition] = React.useState(null)

    // Set the length to match current children from props
    React.useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/* You can alwas change the content of the button to other things */}
                {
                    currentIndex > 0 &&
                    <button onClick={prev} className="left-arrow">
                        <KeyboardArrowLeftIcon/>
                    </button>
                }
                <div
                    className="carousel-content-wrapper"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                >
                    <div
                        className={`carousel-content show-${show}`}
                        style={{ transform: `translateX(-${currentIndex * (100 / (show))}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {/* You can alwas change the content of the button to other things */}
                {
                    currentIndex < (length - show) &&
                    <button onClick={next} className="right-arrow">
                        <KeyboardArrowRightIcon/>
                    </button>
                }
            </div>
        </div>
    )
}

function Products (props) {

    const displayProducts = () => {
        if(props.products.data !== undefined){
            return props.products.data.filter((product, index)=>index < page * 20 && index >= (page - 1) * 20).map((product,index)=>{
                return (
                    <ProductCard tag={tagRandomizer()} key={index} data={product}/>
                )
            })
        }else{
            return (
                <p className="placeholder-glow">
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                    <span className="placeholder col-12"></span>
                </p>
                
            )
        }
    }

    let deviceWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

    const [page, setPage] = React.useState(1)

    const tagRandomizer = () => Math.floor(Math.random() * 3)

    // for slider components of price and stock, respectively
    const [value, setValue] = React.useState([20, 37]);
    const [valueStock, setValueStock] = React.useState([20, 37]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleChangeStock = (event, newValue) => {
        setValueStock(newValue);
    };

    function valuetext(value) {
        return `php ${value}`;
    }

    const [dir, setDir] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    

    // drawer mechanism
    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
        return;
    }
        setDir({ ...dir, [anchor]: open });
    };

    // for the chip component
    const [chipData, setChipData] = React.useState([]);
    const [userInputForChip, setUserInputForChip] = React.useState('')
    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };
    const handleAddChip = () => {
        if(userInputForChip !== "" && chipData.filter(v=>v.label === userInputForChip).length === 0){
            setChipData(chips=>chips.concat({key: chips.length, label: userInputForChip }))
            setUserInputForChip('')
        }
    }

    // navigation list of the drawer
    const list = (anchor) => (
        <Box
        sx={{ width: 250, marginX: '20px' }}
        role="presentation"
        >
        <List>
                <ListItem disablePadding>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Categories</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ width: 200 }}>
                                <FormControl>
                                    <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        value={radioCategSelect}
                                        name="radio-buttons-group"
                                        onChange={e=>setRadioCategSelect(e.target.value)}
                                    >
                                        {categories.map((category, index)=><FormControlLabel key={index} value={index} control={<Radio />} label={category} />)}
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Price</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Box sx={{ width: 200 }}>
                            <Slider
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Stock</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ width: 200 }}>
                                <Slider
                                    value={valueStock}
                                    onChange={handleChangeStock}
                                    valueLabelDisplay="auto"
                                    getAriaValueText={valuetext}
                                />
                            </Box>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
                <Divider />
                <ListItem disablePadding>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography>Tags</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Box sx={{ width: 200 }}>
                            <Stack direction='row'>
                                <TextField id="standard-basic" value={userInputForChip} onChange={e=>setUserInputForChip(e.target.value)} variant="standard" /><Button onClick={handleAddChip}><AddIcon fontSize='small'/></Button>
                            </Stack>
                            <Paper
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    p: 0.5,
                                    m: 0,
                                }}
                                component="ul"
                                >
                                {chipData.map((data) => {
                                    let icon;

                                    return (
                                    <ListItem key={data.key}>
                                        <Chip
                                        icon={icon}
                                        label={data.label}
                                        onDelete={handleDelete(data)}
                                        />
                                    </ListItem>
                                    );
                                })}
                            </Paper>
                        </Box>
                        </AccordionDetails>
                    </Accordion>
                </ListItem>
        </List>
        <Divider />
        <Stack direction="row" spacing={2} justifyContent='flex-end'>
            <Button onClick={handleResetFilter} variant="outlined" startIcon={<RestartAltOutlinedIcon />}>
                Reset
            </Button>
            <Button onClick={handleApplyFilter} variant="contained" startIcon={<FormatPaintOutlinedIcon />}>
                Apply
            </Button>
        </Stack>
        </Box>
    );
    
    // for referencing subnav selection
    let [subnavHighlight, setSubnavHighlight] = React.useState(0)

    //for referencing the category filter selection
    let [radioCategSelect, setRadioCategSelect] = React.useState(0)

    const handleApplyFilter = () => {
        // api call here to fetch data based on filter
        setSubnavHighlight(radioCategSelect)
        categories[radioCategSelect].split(' ').forEach(((word, i)=>setChipData(chips=>chips.concat({key: chips.length + i, label: word }))))
        
    }
    const handleResetFilter = () => {
        // will reset all filters, returning the default params data
        setChipData([])
        setRadioCategSelect(0)
        setSubnavHighlight(0)
        // etc
    }
    
    console.log(props.products)
    
    return (
        <div>
            <React.Fragment key={'left'}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light subnav" id="subNavigation" style={{borderBottom:'2px solid black'}}>
                        <div className="container-fluid mx-auto">
                            <Container className="filter" id="main">
                                <Row>
                                    <Col className="navbar-brand mb-0 h1"><button className="openbtn" onClick={toggleDrawer('left', true)}><TuneIcon/>FILTER</button></Col>
                                    
                                    <Carousel show={deviceWidth <= 700 ? 3 : 8}>
                                        {categories.map((category, index)=>{
                                            return <Col><button className="tablink" onClick={()=>{
                                                setSubnavHighlight(index); setChipData([]); categories[index].split(' ').forEach(((word, i)=>{setChipData(chips=>chips.concat({key: chips.length + i, label: word }))}));
                                            }} key={index} id="defaultOpen"><Typography>{category.toUpperCase()}</Typography></button></Col>
                                        })}
                                    </Carousel>
                                </Row>
                            </Container>            
                        </div>
                        
                </nav>
                
                <div className="wrapper-body bg-white">
                    <div id="Tops" className="tabcontent">
                        <h2 className="tab-title text-center pt-4"><b>{categories[subnavHighlight].toUpperCase()}</b></h2>
                    
                        <div className="container ">
                            <div className="row">
                            <Pagination 
                                defaultPage={1} boundaryCount={2}
                                count={props.products.data === undefined ? 10 : Number(Math.ceil(props.products.data.length / 20))} 
                                size='large' 
                                variant="outlined" 
                                shape="rounded"
                                color="secondary" 
                                style={{backgroundColor: 'white'}}
                                page={page} 
                                onChange={(e,v)=>setPage(Number(v))}
                            />
                                {console.log(page)}
                                {displayProducts()}
                            </div>
                        </div>
                    </div>
                </div>
                <SwipeableDrawer
                    anchor={'left'}
                    open={dir['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
                
            </React.Fragment>
        </div>
  );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products)