import React from 'react';
import { render, screen } from '@testing-library/react';
import Podcast from './Podcast';

describe('Podcast', () => {
 test('renders Podcast component with valid props', () => {
    const episodeTitle = 'Episode 1';
    const episode = 1;
    const season = 1;
    render(<Podcast episodeTitle={episodeTitle} episode={episode} season={season} />);
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.getByText('Episode: 1')).toBeInTheDocument();
    expect(screen.getByText('Season: 1')).toBeInTheDocument();
 });

 test('renders Podcast component with missing episode prop', () => {
    const episodeTitle = 'Episode 1';
    const season = 1;
    render(<Podcast episodeTitle={episodeTitle} season={season} />);
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.queryByText('Episode:')).toBeNull();
    expect(screen.getByText('Season: 1')).toBeInTheDocument();
 });

 test('renders Podcast component without season information', () => {
    const episodeTitle = 'Episode 1';
    const episode = 1;
    render(<Podcast episodeTitle={episodeTitle} episode={episode} />);
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.getByText('Episode: 1')).toBeInTheDocument();
    expect(screen.queryByText(/Season:/i)).not.toBeInTheDocument();
 });

 test('renders Podcast component without episode and season information', () => {
    const episodeTitle = 'Episode 1';
    render(<Podcast episodeTitle={episodeTitle} />);
    expect(screen.getByText('Episode 1')).toBeInTheDocument();
    expect(screen.queryByText(/Episode:/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Season:/i)).not.toBeInTheDocument();
 });
});
