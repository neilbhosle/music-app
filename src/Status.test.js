import React from 'react';
import { render, screen } from '@testing-library/react';
import Status from './Status';

describe('Status', () => {
 test('renders "Player: <title>" when isPlaying and currentSelection is a song', () => {
    const currentSelection = { title: 'Hello', artist: 'Adele', year: 2015 };
    render(<Status isPlaying={true} currentSelection={currentSelection} />);
    expect(screen.getByText('Status: Player: Hello')).toBeInTheDocument();
 });

 test('renders status correctly', async () => {
    render(<Status isPlaying={true} currentSelection={{ title: 'Example Title' }} />);
    const statusText = await screen.findByText(/Status:/i); // Use a case-insensitive regular expression matcher
    expect(statusText).toBeInTheDocument();
 });

 test('renders "Player: <episodeTitle>" when isPlaying and currentSelection is a podcast', () => {
    const currentSelection = { episodeTitle: 'Episode 1', episode: 1, season: 1 };
    render(<Status isPlaying={true} currentSelection={currentSelection} />);
    expect(screen.getByText('Status: Player: Episode 1')).toBeInTheDocument();
 });

 test('renders "Paused" when not isPlaying and currentSelection is not null', () => {
    const currentSelection = { title: 'Hello', artist: 'Adele', year: 2015 };
    render(<Status isPlaying={false} currentSelection={currentSelection} />);
    expect(screen.getByText('Status: Paused')).toBeInTheDocument();
 });

 test('does not render specific text when not playing and no selection', () => {
  render(<Status isPlaying={false} currentSelection={null} />);
  // Check that the component does not render any text indicating a song or episode is playing
  expect(screen.queryByText(/Player:/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/Episode:/i)).not.toBeInTheDocument();
 });
 
 });

