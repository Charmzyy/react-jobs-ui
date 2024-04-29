import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import JobPage ,{jobLoader} from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import MainLayout from "./layouts/MainLayout";
import AddJobPage from "./pages/AddJobPage";


const App = () => {
  return <RouterProvider router={router}/>
  const addJob = async (newJob) => {
    const res = await fetch ('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/jobs/:id" element={<JobPage/>} loader={jobLoader}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJobSubmit}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  );
  
};

export default App;