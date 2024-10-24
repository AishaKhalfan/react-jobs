import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider }  
  from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';  
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';  
import JobPage, { jobLoader }  from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import HomeCards from './components/HomeCards';
// import JobListings from './components/JobListings';
// import ViewAllJobs from './components/ViewAllJobs';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={ <HomePage/>} />
      <Route path='/jobs' element={ <JobsPage/>} />
      <Route path='*' element={ <NotFoundPage/>} />
      <Route path='/jobs/:id' element={ <JobPage/>} loader={jobLoader} />
      <Route path='/add-job' element={ <AddJobPage/>} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router
  }/>
};
export default App;
