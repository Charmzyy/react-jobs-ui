import React, { useEffect, useState } from 'react';
import JobListing from './JobListing';
import Spinner from './Spinner';

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch jobs');
          }
          return response.json();
        })
        .then((data) => {
          setJobs(data);
        })
        .catch((error) => {
          console.log('Error', error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      console.log('Error', error);
    }
  }, []);

  return (
    <>
      {/* <!-- Browse Jobs --> */}
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          {loading ? <Spinner loading={loading} /> : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => {
                return <JobListing key={job.id} job={job} />;
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default JobListings;