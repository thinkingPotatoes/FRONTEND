import { Navigate } from 'react-router';

function Redirect() {
  const params = new URLSearchParams(window.location.search);

  const token = params.get('token');

  fetch(`/users/email-verify?token=${token}`)
    .then((res) => res.json())
    .then(() => {});

  return <Navigate to="/register/complete"></Navigate>;
}

export default Redirect;
