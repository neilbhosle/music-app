  import React from 'react';
 import { render, screen } from '@testing-library/react';
 import Song from './Song';

 describe('Song', () => {
   test('renders Song component with valid props', () => {
     const title = 'Hello';
     const artist = 'Adele';
     const year = 2015;
     render(<Song title={title} artist={artist} year={year} />);
     expect(screen.getByText('Title: Hello')).toBeInTheDocument();
     expect(screen.getByText('Artist: Adele')).toBeInTheDocument();
     expect(screen.getByText('Year: 2015')).toBeInTheDocument();
   });

   test('renders Song component with missing props', () => {
    render(<Song />);
    expect(screen.getByText('Title:')).toBeInTheDocument();
    expect(screen.getByText('Artist:')).toBeInTheDocument();
    expect(screen.getByText('Year:')).toBeInTheDocument();
   });
   

   test('renders Song component with invalid year prop', () => {
     const title = 'Hello';
     const artist = 'Adele';
     const year = '2015'; // year should be a number
     render(<Song title={title} artist={artist} year={year} />);
     expect(screen.getByText('Title: Hello')).toBeInTheDocument();
     expect(screen.getByText('Artist: Adele')).toBeInTheDocument();
     expect(screen.getByText('Year: 2015')).toBeInTheDocument();
   });
 });