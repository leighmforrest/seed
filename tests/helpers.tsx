import { useLocation } from "react-router-dom";
/**
 * Component to display current location in tests.
 * @returns 
 */
export const LocationDisplay = () => {
  const location = useLocation();
  return <div data-testid="location">{location.pathname}</div>;
};