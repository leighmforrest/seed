import { useLocation } from "react-router-dom";
/**
 * Component to display navigated to location in tests.
 */
export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};