import useMutation from "../api/useMutation";

export default function ActivityForm() {
  const {
    mutate: add,
    data,
    loading,
    error,
  } = useMutation("POST", "/activities", ["allActivities"]);
  const addActivity = (formData) => {
    const description = formData.get("description");
    const name = formData.get("name");
    add({ name, description });
  };
  return (
    <>
      <h2> Add an activity </h2>
      <form action={addActivity}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Description
          <input type="text" name="description" required />
        </label>
        <button> Add activity </button>
        {error && <output>{error}</output>}
      </form>
    </>
  );
}
