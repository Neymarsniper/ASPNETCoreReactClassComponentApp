import { News } from "./components/News";
import { NewsItem } from "./components/NewsItem";
const AppRoutes = [
  {
    index: true,
    element: <News />
  },
  //{
  //      path: '/News',
  //      element: <News />
  //  },
    {
        path: '/NewsItem',
        element: <NewsItem />
    }
];

export default AppRoutes;
