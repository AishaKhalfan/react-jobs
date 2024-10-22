{/* import { useState, useEffect } from "react" */}
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner" 
import { use } from "express/lib/application";

const JobPage = () => {
    const { id } = useParams();
    {/* 
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchJob = async () => {
    //         const apiUrl = `/api/jobs/${id}`;
    //         try {
    //             const res = await fetch(apiUrl);
    //             const data = await res.json();
    //             console.log(data);
    //             setJob(data);
    //         } catch (error) {
    //             console.log('Error fetching data', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchJob();
    // }, []);
    */}
  const job = useLoaderData(jobLoader);

  return <h1>{ job.title} </h1>
};

const jobLoader = async ({ params }) => {
    const res = await fetch(`/api/jobs/${params.id}`);
    const data = await res.json();
    return data;

};

export {JobPage as default, jobLoader };