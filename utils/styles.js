import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    // navbar:{
    //     backgroundColor: '#203040',
    //     '& a': {
    //         color: '#ffffff',
    //         marginLeft: 10,
    //     }
    // },
    grow:{
        flexGrow: 1,
    },
    main: {
        minHeight: '80vh',
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    footer:{
        textAlign: 'center',
    },
})
export default useStyles