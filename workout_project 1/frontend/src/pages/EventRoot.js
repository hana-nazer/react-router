import { Outlet, useNavigation } from "react-router-dom";
import EventNavigation from '../components/EventsNavigation'
function EventRootLayout() {
    const navigation = useNavigation()
  return (
    <>
      <EventNavigation/>
      {navigation.state === 'loading' && <p>Loading..</p>}
      <Outlet />
    </>
  );
}

export default EventRootLayout;
