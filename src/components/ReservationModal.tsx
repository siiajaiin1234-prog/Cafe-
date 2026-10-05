import React, { useState } from 'react';
import { X, Check, Calendar, Clock, Users, Coffee, Sparkles } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [serviceType, setServiceType] = useState<'Table' | 'Bakery' | 'Tasting'>('Table');
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('2026-10-06');
  const [time, setTime] = useState('09:30');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'VH-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-2xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 bg-white flex items-center justify-between">
          <h3 className="font-serif text-xl font-medium text-stone-900">
            {isSubmitted ? 'Confirmation' : 'Table Reservation &amp; Pre-Orders'}
          </h3>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-800 rounded-md hover:bg-stone-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Service Type Segmented Control */}
              <div>
                <label className="text-xs font-medium text-stone-700 block mb-1.5">
                  Select Experience
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setServiceType('Table')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                      serviceType === 'Table'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Cafe Table
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('Bakery')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                      serviceType === 'Bakery'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Bakery Pre-Order
                  </button>
                  <button
                    type="button"
                    onClick={() => setServiceType('Tasting')}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border transition-colors cursor-pointer text-center ${
                      serviceType === 'Tasting'
                        ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                        : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
                    }`}
                  >
                    Pour-Over Flight
                  </button>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-900"
                  />
                </div>
              </div>

              {/* Number of Guests (if table/tasting) */}
              {serviceType !== 'Bakery' && (
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Party Size
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-900"
                  >
                    <option value="1">1 Person (Quiet Reading Alcove)</option>
                    <option value="2">2 Guests (Small Table)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="6">6 Guests (Hearth Long Table)</option>
                  </select>
                </div>
              )}

              {/* Contact info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Clara Oswald"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-stone-700 block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="clara@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-900"
                  />
                </div>
              </div>

              {/* Special notes */}
              <div>
                <label className="text-xs font-medium text-stone-700 block mb-1">
                  Specific Requests or Dietary Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sourdough loaf reserve, almond milk, quiet window seat..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-stone-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs font-medium rounded-lg shadow-xs transition-colors cursor-pointer"
              >
                Confirm Booking &amp; Hold
              </button>
            </form>
          ) : (
            // Confirmation Screen
            <div className="text-center space-y-4 py-4 animate-in fade-in">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif text-2xl text-stone-900 font-normal">
                  Reservation Confirmed
                </h4>
                <p className="text-xs text-stone-500 mt-1">
                  Confirmation Code: <strong className="font-mono text-stone-800">{confirmationCode}</strong>
                </p>
              </div>

              <div className="p-4 bg-white border border-stone-200 rounded-xl text-left text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-stone-500">Guest:</span>
                  <span className="font-medium text-stone-900">{name || 'Guest'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Service:</span>
                  <span className="font-medium text-stone-900">{serviceType === 'Table' ? `Table for ${guests}` : serviceType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Date &amp; Time:</span>
                  <span className="font-medium text-stone-900">{date} at {time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">Location:</span>
                  <span className="font-medium text-stone-900">418 Millstone Lane, Portland</span>
                </div>
              </div>

              <p className="text-[11px] text-stone-500">
                A confirmation note has been dispatched to <strong>{email}</strong>. We look forward to welcoming you to the hearth.
              </p>

              <button
                onClick={handleReset}
                className="px-5 py-2 bg-stone-900 text-white text-xs font-medium rounded-lg cursor-pointer"
              >
                Done
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
