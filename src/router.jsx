import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";

import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import EditContact, {
  action as editAction,
} from "./routes/edit";
import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contact";
import {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import { action as destroyAction } from "./routes/destroy";
import Index from "./routes/index";

export const routerJsx = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);
