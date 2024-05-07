import type { ActionArgs} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import { badRequest } from "~/utils/request.serve";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");

  console.log({ name, content });

  if(!content) {
    return badRequest({
      fieldError: null,
      fields: null,
      formError: "内容不能为空"
    })
  }


  return redirect(`/jokes/${name}`);
  
}

export default function NewJokeRoute() {
  // const actionData = useActionData<typeof action>();
  // console.log('actionData:', actionData);
  
  
  return (
    <div>
      <p>Add your own hilarious joke</p>
      {/* <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>

        </div>
      </form> */}
    </div>
  );
}