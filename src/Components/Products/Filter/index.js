const Filter = () => {
    // for filter components of price and stock, respectively
    const [priceLabel, setPriceLabel] = React.useState('')
    const priceSelections = {
        "Less than PHP 399.99": [1, 399.99],
        "PHP 400.00 - PHP 999.99": [400, 999.99],
        "PHP 1000.00 - PHP 3999.99": [1000, 3999.99],
        "PHP 4000.00 - PHP 9999.99": [4000, 9999.99],
        "PHP 10000.00 and above": [10000, -1]
    }
    const [priceFilter, setPriceFilter] = React.useState(priceLabel === "" ? [0, 0] : priceSelections[priceLabel])
    const handlePriceLabelChange = (e) => {
        setPriceLabel(e.target.value)
        setPriceFilter(priceLabel === "" ? [0, 0] : priceSelections[e.target.value])
        console.log(priceFilter)
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
                            <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 170 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Price Range</InputLabel>
                                    <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={priceLabel}
                                    label="price range"
                                    onChange={handlePriceLabelChange}
                                    >
                                    <MenuItem value="">
                                        <em>All</em>
                                    </MenuItem>
                                    <MenuItem value="Less than PHP 399.99">Less than PHP 399.99</MenuItem>
                                    <MenuItem value="PHP 400.00 - PHP 999.99">PHP 400.00 - PHP 999.99</MenuItem>
                                    <MenuItem value="PHP 1000.00 - PHP 3999.99">PHP 1000.00 - PHP 3999.99</MenuItem>
                                    <MenuItem value="PHP 4000.00 - PHP 9999.99">PHP 4000.00 - PHP 9999.99</MenuItem>
                                    <MenuItem value="PHP 10000.00 and above">PHP 10000.00 and above</MenuItem>
                                    </Select>
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
                        <Typography>Stock</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Box sx={{ width: 200 }}>
                                Stock Filter
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
        props.resetFilter()
        // etc
    }
    return (
        <SwipeableDrawer
            anchor={'left'}
            open={dir['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
                >
                {list('left')}
        </SwipeableDrawer>
    )
}

export default Filter