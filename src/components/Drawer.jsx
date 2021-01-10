import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import {List,Divider,ListItem,ListItemIcon,ListItemText,ChevronLeftIcon,ChevronRightIcon,} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

function Drawer() {
    return (
        <>
            <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} style={{color:'tan'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {menuItem.map((lsItem, key) => (
            <ListItem button key={key}>
              <ListItemIcon className={classes.listItem}>{lsItem.listIcons}</ListItemIcon>
              <ListItemText primary={lsItem.listText} />
            </ListItem>
          ))}
        </List>
        
      </Drawer>
        </>
    )
}

export default Drawer
