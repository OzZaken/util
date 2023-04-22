import { makeStyles } from '@material-ui/core/styles'

// Define your custom Material-UI layout styles
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    // Add any additional layout styles here
}))

// Export the layout styles as a service
export const MUILayouts = { useStyles }
