 import React from 'react';
 import { render, screen, fireEvent } from '@testing-library/react';
 import Playlist from './Playlist';
 import '@testing-library/jest-dom';

 describe('Playlist', () => {
  test('renders Playlist component', () => {
     render(<Playlist />);
     expect(screen.getByText('Playlist')).toBeInTheDocument();
  });

  

   test('shuffles tracks when "Shuffle" button is clicked', async () => {
      render(<Playlist />);
      const shuffleButton = screen.getByText('Shuffle');
      fireEvent.click(shuffleButton);
      await screen.findByText(/Status:/i);
  });
    

   
   
  
    
   
   
  })

