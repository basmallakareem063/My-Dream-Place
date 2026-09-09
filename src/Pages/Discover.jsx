import Alert from "../Components/Alert/Alert";
import Choose from "../Components/Choose_Section/Choose";
import Enjoy from "../Components/Enjoy_Section/Enjoy";
import NextTrip from "../Components/Next_Trip/NextTrip";

export default function Discover() {
  return (
    <div id="discover">
      <Alert />
      <Choose />
      <Enjoy />
      <NextTrip />
    </div>
  );
}
