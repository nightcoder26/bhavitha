import React, { useEffect, useState } from "react";

function CurrentWakaTimeActivity() {
  const [currentActivity, setCurrentActivity] = useState(null);

  useEffect(() => {
    const fetchWakaTimeData = async () => {
      try {
        const response = await fetch(
          "https://wakatime.com/api/v1/users/current/summaries?range=Today",
          {
            headers: {
              Authorization: `waka_f1b5e03c-40e2-4d53-8cb6-8d78254e1c3c`, // Replace with your API Key
            },
          }
        );
        const data = await response.json();

        // Extract the latest activity from today
        if (data.data && data.data[0] && data.data[0].projects.length > 0) {
          const latestProject = data.data[0].projects[0];
          setCurrentActivity({
            project: latestProject.name,
            timeSpent: latestProject.text,
          });
        } else {
          setCurrentActivity(null);
        }
      } catch (error) {
        console.error("Error fetching WakaTime data:", error);
      }
    };

    fetchWakaTimeData();
  }, []);

  return (
    <div>
      <h3>Currently Coding:</h3>
      {currentActivity ? (
        <div>
          <p>Project: {currentActivity.project}</p>
          <p>Time Spent: {currentActivity.timeSpent}</p>
        </div>
      ) : (
        <p>Not coding anything right now</p>
      )}
    </div>
  );
}

export default CurrentWakaTimeActivity;
