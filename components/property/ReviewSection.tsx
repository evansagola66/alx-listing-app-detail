import React from 'react';

type Review = {
    id: string;
    author: string;
    rating: number;
    comment: string;
    date: string;
};

type ReviewSectionProps = {
    reviews: Review[];
};

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
    if (reviews.length === 0) {
        return <div>No reviews yet.</div>;
    }

    return (
        <section>
            <h2>Reviews</h2>
            <ul>
                {reviews.map((review) => (
                    <li key={review.id} style={{ marginBottom: '1rem' }}>
                        <strong>{review.author}</strong> &mdash; {review.date}
                        <div>Rating: {review.rating}/5</div>
                        <p>{review.comment}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default ReviewSection;