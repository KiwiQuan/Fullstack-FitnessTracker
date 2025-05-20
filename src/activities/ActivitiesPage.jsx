import ActivityList from "./ActivityList";
import { useAuth } from "../auth/AuthContext";
import ActivityForm from "./ActivityForm";

export default function ActivitiesPage() {
  const { token } = useAuth();
  return (
    <>
      <h1>Activities</h1>
      <ActivityList />
      {token && <ActivityForm />}
    </>
  );
}
