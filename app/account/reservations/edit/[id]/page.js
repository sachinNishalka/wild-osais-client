import UpdateBookingForm from "@/app/_components/UpdateBookingForm";

import { getBooking, getSettings } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const bookignId = params.id;

  const booking = await getBooking(bookignId);
  const settings = await getSettings();

  // CHANGE
  const reservationId = bookignId;
  const maxCapacity = settings.maxGuestsPerBooking;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <UpdateBookingForm
        booking={booking}
        settings={settings}
        reservationId={reservationId}
        maxCapacity={maxCapacity}
      ></UpdateBookingForm>
    </div>
  );
}
