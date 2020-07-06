import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ListAltIcon from '@material-ui/icons/ListAlt';

const MenuOptions = ((props) => {
  const { itemTitle, options } = props;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <IconButton aira-label="Show menu options" size="small" color="primary" onClick={handleClickOpen}>
        <ListAltIcon fontSize="inherit" />
      </IconButton>
      <Dialog onClose={handleClose} aria-labelledby={`${itemTitle}-dialog-title`} open={open}>
        <DialogTitle id={`${itemTitle}-dialog-title`}>{itemTitle} options</DialogTitle>
        <List>
          {options.map((option) => (
            <ListItem button onClick={() => handleClose()} key={option}>
              <ListItemText primary={option} />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </div>
  );
});

MenuOptions.propTypes = {
  itemTitle: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired
};

export default MenuOptions;