import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { MUIAnimate } from './animate.service';

function AnimatedHeader(props) {
  const classes = MUIAnimate.useAnimate('headerAnimation', {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: '0.5s',
    timingFunction: 'ease-in-out',
  });

  return (
    <AppBar position="static" className={classes.animate}>
      <Toolbar>
        <Typography variant="h6">
          {props.title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

function AnimatedButton(props) {
  const classes = MUIAnimate.useAnimate('buttonAnimation', {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: '0.5s',
    timingFunction: 'ease-in-out',
  });

  return (
    <Button className={classes.animate} {...props}>
      {props.children}
    </Button>
  );
}

function AnimatedPage(props) {
  const classes = MUIAnimate.useAnimate('pageAnimation', {
    from: { opacity: 0 },
    to: { opacity: 1 },
    duration: '0.5s',
    timingFunction: 'ease-in-out',
  });

  return (
    <Container className={classes.animate}>
      {props.children}
    </Container>
  );
}

function App() {
  return (
    <div>
      <AnimatedHeader title="Animated Header" />
      <AnimatedPage>
        <Typography variant="h6">
          Welcome to the animated page!
        </Typography>
        <AnimatedButton color="primary">
          Click me!
        </AnimatedButton>
      </AnimatedPage>
    </div>
  );
}

export default App;