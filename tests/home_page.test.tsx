import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '../app/page';

describe('HomePage', () => {
    it('renders the page with the correct elements', () => {
        render(<HomePage />);
        
        // Check if the logo is rendered
        const logoText = screen.getByAltText('logoText');
        expect(logoText).toBeInTheDocument();
        
        // Check if the stock photo under the logo is rendered
        const stockUnderLogo = screen.getByAltText('stockUnderLogo');
        expect(stockUnderLogo).toBeInTheDocument();
        
        // Check if the "PICK YOUR OWN" link is rendered
        const pickYourOwnLink = screen.getByText('PICK YOUR OWN');
        expect(pickYourOwnLink).toBeInTheDocument();
        
        // Check if the "SEASON EVENTS" link is rendered
        const seasonEventsLink = screen.getByText('SEASON EVENTS');
        expect(seasonEventsLink).toBeInTheDocument();
        
        // Check if the "GET TICKETS" link is rendered
        const getTicketsLink = screen.getByText('GET TICKETS');
        expect(getTicketsLink).toBeInTheDocument();
        
        // Check if the "CALENDAR" link is rendered
        const calendarLink = screen.getByText('CALENDAR');
        expect(calendarLink).toBeInTheDocument();
    });
});