import { Typography } from '@material-ui/core'

// Export the Material-UI Typography component with predefined styles as a service
export const MUITypography = {
  H1: ({ children }) => (
    <Typography variant="h1" component="h1">
      {children}
    </Typography>
  ),
  H2: ({ children }) => (
    <Typography variant="h2" component="h2">
      {children}
    </Typography>
  ),
  // Add any additional predefined Typography components here
}
