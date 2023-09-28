import './Card.scss';

// eslint-disable-next-line react/prop-types
const Card = ({ title, body }) => {
    return (
        <div className='card'>
            <div className='card_header'>{title}</div>
            <div className='card_body'>{body}</div>
        </div>
    );
};

export default Card;