import Discover from "./pages/Discover";
import NewRelease from "./pages/NewRelease";
import FeaturedPlaylist from "./pages/FeaturedPlaylist";

// Icon
import HomeIcon from "./assets/icons/headphone.svg";
import NewReleaseIcon from "./assets/icons/play.svg";
import FeaturedPlaylistIcon from "./assets/icons/menu.svg";

const routes = [
  {
    name: "User List",
    path: "/",
    component: Discover,
    exact: true,
    icon: HomeIcon,
  },
  {
    name: "User View",
    path: "/user-view/:id",
    component: NewRelease,
    exact: true,
    icon: NewReleaseIcon,
  },
  {
    name: "My Profile",
    path: "/profile",
    component: FeaturedPlaylist,
    exact: true,
    icon: FeaturedPlaylistIcon,
  },
];

export default routes;
