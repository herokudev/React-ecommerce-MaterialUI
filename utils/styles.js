import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#202340',
    '& a': {
      color: '#FFFFFF',
      marginLeft: '10px',
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '85vh',
  },
  footer: {
    textAlign: 'center',
  },
  section: {
    marginTop: '10px',
    marginBottom: '10px',
  },
});
export default useStyles;
