import React, { useState } from 'react';
import styled from 'styled-components'
import Input from './components/Input'
import Button from './components/Button/Button';
import GlobalStyle, { colors } from './styles/globalStyles';

const AppContainer = styled.div `
  text-align: center;
`
const Text = styled.div`
  display: block;
  margin: 15px;
  font-size: 20px;
`

const StyledTitle = styled.h2 `
  color: ${colors.spray};
  font-size: 50px;
`

const App = () => {
  const INITIAL_GAME_STATE = { victory: false, startTime: null, endTime: null };
  const SNIPPETS = [ 
    {
      id: 1,
      text: 'Bears, beets, battlestar galactica',
      title: 'Bears!'
    },
    {
      id: 2,
      text: 'What\'s Forrest Gump\'s password? 1Forrest1',
      title: 'Forrest Gump'
    },
    {
      id: 3,
      text: 'Where do programmers like to hangout? The Foo Bar',
      title: 'Programmers'
    },
  ];
  const [snippet, setSnippet] = useState('');
  const [userText, setUserText] = useState('');
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  const updateUserText = event => {
    setUserText(event.target.value);
    if (event.target.value === snippet.text) {
      setGameState({
        ...gameState,
        victory: true,
        endTime: new Date().getTime() - gameState.startTime
      });
    }
  }

  const chooseSnippet = snippetIndex => () => {
    setSnippet(SNIPPETS[snippetIndex]);
    setGameState({ ...gameState, startTime: new Date().getTime() });
  };

  return (
    <AppContainer>
      <StyledTitle>Type Race</StyledTitle>
      {!gameState.startTime && <Text>Choose a text snippet to start the race!</Text> }
      <Text>{snippet.text}</Text>
      {snippet && <Input value={userText} onChange={updateUserText} autoFocus ></Input>}
      <h4>{gameState.victory ? `Done! 🎉 Time: ${gameState.endTime / 1000}s` : null}</h4>
      {
        SNIPPETS.map((SNIPPET, index) => (
          <Button onClick={chooseSnippet(index)} key={SNIPPET.id}>
            {SNIPPET.title}
          </Button>
        ))
      }
      <GlobalStyle />
    </AppContainer>
  )
}

export default App;
