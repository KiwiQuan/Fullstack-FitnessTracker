import useQuery from "../api/useQuery";
import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation";
export default function ActivityList() {
  const {
    data: activities,
    loading,
    error,
  } = useQuery("/activities", "allActivities");

  if (loading || !activities) return <div>Loading...</div>;
  if (error) return <div>Failed to load activities {error}</div>;

  return (
    <ul>
      {activities.map((activity) => (
        <ActivityListItem activity={activity} key={activity.id} />
      ))}
    </ul>
  );
}

function ActivityListItem({ activity }) {
  const {
    mutate: deleteActivity,
    loading,
    error,
  } = useMutation("DELETE", `/activities/${activity.id}`, ["allActivities"]);
  const { token } = useAuth();
  if (token)
    return (
      <div>
        <li>{activity.name}</li>
        <button onClick={() => deleteActivity()}>
          {loading ? "Deleting..." : error ? error : "Delete"}
        </button>
      </div>
    );
  return <li>{activity.name}</li>;
}
