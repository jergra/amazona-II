import {makeStyles} from "@mui/styles"

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        },
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    grow: {
        flexGrow: 1
    },
    main: {
        minHeight: '80vh'
    },
    footer: {
        marginTop: 10,
        textAlign: 'center'
    },
    section: {
        marginTop: 10,
        marginBottom: 10
    },
    form: {
        width: '100%',
        maxWidth: 800,
        margin: '0 auto'
    },
    navbarButton: {
        color: 'white',
        textTransform: 'initial'
    },
    transparentBackground: {
        backgroundColor: 'transparent',
    },
    error: {
        color: '#f04040',
    },
    fullWidth: {
        width: '100%'
    }
})

export default useStyles