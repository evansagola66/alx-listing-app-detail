import React from 'react';

type BookingSectionProps = {
    pricePerNight: number;
    availableDates: string[];
    onBook: (date: string) => void;
};

const BookingSection: React.FC<BookingSectionProps> = ({
    pricePerNight,
    availableDates,
    onBook,
}) => {
    const [selectedDate, setSelectedDate] = React.useState<string>('');

    const handleBook = () => {
        if (selectedDate) {
            onBook(selectedDate);
        }
    };

    return (
        <section>
            <h2>Book This Property</h2>
            <div>
                <span>Price per night: </span>
                <strong>${pricePerNight}</strong>
            </div>
            <div>
                <label htmlFor="date-select">Select a date:</label>
                <select
                    id="date-select"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                >
                    <option value="">Choose a date</option>
                    {availableDates.map(date => (
                        <option key={date} value={date}>
                            {date}
                        </option>
                    ))}
                </select>
            </div>
            <button
                type="button"
                disabled={!selectedDate}
                onClick={handleBook}
            >
                Book Now
            </button>
        </section>
    );
};

export default BookingSection;