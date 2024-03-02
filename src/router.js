import Login from "./features/auth/login/Login";

const injectProps = (props, Component) => {
  return <Component {...props} />;
};

export const routes = {
  login: {
    exact: false,
    path: "/login",
    component: (props) => injectProps(props, Login),
    title: "login",
  },
};

export const paths = [
  {
    category: "login",
    to: routes.login.path,
    name: routes.login.title,
    key: "login",
  },
];
