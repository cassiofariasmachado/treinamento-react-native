import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Home />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
