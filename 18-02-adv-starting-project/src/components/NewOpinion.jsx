import { useActionState, use } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function shareOpinioAction(prevFormState, formData) {
    const title = formData.get("title");
    const body = formData.get("body");
    const userName = formData.get("userName");

    let errors = [];
    if (!title || title.length < 5) {
      errors.push("Title must be at least 5 characters long.");
    }
    if (!body || body.length < 10) {
      errors.push("Opinion must be at least 10 characters long.");
    }
    if (!userName || userName.length < 3) {
      errors.push("User name must be at least 3 characters long.");
    }
    if (errors.length > 0) {
      return { errors, enteredValues: { title, body, userName } };
    }

    await addOpinion({ title, body, userName });
    return { errors: null };
  }

  const [formSate, formAction] = useActionState(shareOpinioAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formSate.enteredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formSate.enteredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formSate.enteredValues?.body}
          ></textarea>
        </p>

        {formSate.errors && (
          <ul className="errors">
            {formSate.errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}

        <Submit />
      </form>
    </div>
  );
}
