import ReactDOM from 'react-dom';
import Home from './screens/home';
import { QueryClient, QueryClientProvider } from 'react-query'
 
const queryClient = new QueryClient()

const App = () => {
    return ( 
        <QueryClientProvider client={queryClient}>
        <Home />
        </QueryClientProvider>
     );
}
 
ReactDOM.render(<App />, document.getElementById('root'))