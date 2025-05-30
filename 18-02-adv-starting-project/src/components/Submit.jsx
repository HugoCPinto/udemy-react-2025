import { useFormStatus } from "react-dom";

export default function Submit({ formState, formAction }) {
  const { pending } = useFormStatus();

  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "..." : "Submit"}
      </button>
    </p>
  );
}
