import DashBoard from './views/DashBoard.js';

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    { path: '/', view: () => console.log('대시보드짠!') },
    { path: '/posts', view: () => console.log('포스트짠!') },
    { path: '/setting', view: () => console.log('setting짠!') },
  ];

  const potentialMaches = routes.map((route) => {
    return { route: route, isMatch: location.pathname === route.path };
  });
  let match = potentialMaches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.querySelector('#app').innerHTML = await view.getHTML();

  console.log(match.route.view());
};
window.addEventListener('popstate', router);

document.addEventListener('DOMContentL oaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });

  router();
});
