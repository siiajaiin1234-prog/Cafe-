import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { Clock, MapPin, Compass, Wifi, Dog, Bike } from 'lucide-react';

interface VisitSectionProps {
  onOpenReservation: () => void;
}

export const VisitSection: React.FC<VisitSectionProps> = ({ onOpenReservation }) => {
  const today = new Date().getDay(); // 0 is Sunday, 6 is Saturday
  const isWeekend = today === 0 || today === 6;

  const schedule = [
    { day: 'Monday', hours: '6:30 AM – 5:00 PM', isToday: today === 1 },
    { day: 'Tuesday', hours: '6:30 AM – 5:00 PM', isToday: today === 2 },
    { day: 'Wednesday', hours: '6:30 AM – 5:00 PM', isToday: today === 3 },
    { day: 'Thursday', hours: '6:30 AM – 5:00 PM', isToday: today === 4 },
    { day: 'Friday', hours: '6:30 AM – 5:00 PM', isToday: today === 5 },
    { day: 'Saturday', hours: '7:00 AM – 6:00 PM', isToday: today === 6 },
    { day: 'Sunday', hours: '7:00 AM – 6:00 PM', isToday: today === 0 },
  ];

  return (
    <section id="hours" className="py-16 md:py-24 bg-[#FBF9F5] border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-900 font-medium">
            Find Us in the Pearl District
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-normal mt-1 tracking-tight">
            Visiting Verdant Hearth
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            A quiet sanctuary nestled between red-brick warehouses and cobbled avenues. Step in for morning espresso, fresh sourdough, or slow afternoon reading.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Hours Schedule Card */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-stone-100">
              <Clock className="w-5 h-5 text-amber-900" />
              <h3 className="font-serif text-xl font-medium text-stone-900">
                Weekly Operating Hours
              </h3>
            </div>

            <div className="space-y-2.5">
              {schedule.map((slot) => (
                <div
                  key={slot.day}
                  className={`flex items-center justify-between py-2 px-3 rounded-lg text-xs transition-colors ${
                    slot.isToday
                      ? 'bg-amber-50/80 text-amber-950 font-medium border border-amber-200/80'
                      : 'text-stone-600 hover:bg-stone-50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {slot.day}
                    {slot.isToday && (
                      <span className="text-[10px] text-amber-800 uppercase tracking-wider font-semibold">
                        (Today)
                      </span>
                    )}
                  </span>
                  <span className="font-mono tabular-nums text-stone-900">
                    {slot.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-stone-100">
              <button
                onClick={onOpenReservation}
                className="w-full py-2.5 text-xs font-medium text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors cursor-pointer text-center"
              >
                Reserve a Table or Pre-Order
              </button>
            </div>
          </div>

          {/* Right Column: Location & Amenities Guide */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Address & transit */}
            <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-stone-100">
                <MapPin className="w-5 h-5 text-amber-900" />
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  Address &amp; Arrival
                </h3>
              </div>

              <p className="font-serif text-lg text-stone-900 mb-1">
                {CAFE_INFO.address}
              </p>
              <p className="text-xs text-stone-500 mb-4">
                Phone: {CAFE_INFO.phone} · Email: {CAFE_INFO.email}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-100 text-xs text-stone-600">
                <div>
                  <strong className="text-stone-800 block mb-0.5">By Streetcar / MAX</strong>
                  Portland Streetcar (NW 10th &amp; Glisan stop) is just 2 blocks away. Red/Blue MAX line at Providence Park is a 7-minute walk.
                </div>
                <div>
                  <strong className="text-stone-800 block mb-0.5">Parking &amp; Bicycles</strong>
                  Metered 2-hour street parking along Millstone Lane and NW 11th. Dedicated secure bicycle staples on our patio.
                </div>
              </div>
            </div>

            {/* House Amenities & Atmosphere */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center mb-3">
                  <Wifi className="w-4 h-4 text-stone-700" />
                </div>
                <h4 className="font-medium text-xs text-stone-900 mb-1">Mindful Wi-Fi</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  High-speed fiber available. Laptops welcome at communal counters until 11:30 AM; unplugged cafe culture thereafter.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center mb-3">
                  <Dog className="w-4 h-4 text-stone-700" />
                </div>
                <h4 className="font-medium text-xs text-stone-900 mb-1">Heated Garden Patio</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Four-season garden terrace with radiant overhead heat lamps and fresh water bowls for four-legged companions.
                </p>
              </div>

              <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center mb-3">
                  <Bike className="w-4 h-4 text-stone-700" />
                </div>
                <h4 className="font-medium text-xs text-stone-900 mb-1">Takeaway Counter</h4>
                <p className="text-[11px] text-stone-500 leading-relaxed">
                  Dedicated express pick-up hatch for mobile orders and morning commuters running for the streetcar.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
