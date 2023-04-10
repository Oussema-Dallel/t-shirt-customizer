import { App } from './App';
import { render, screen } from '@testing-library/react';

describe('<App />', () => {
	it('renders Hello world!', () => {
		render(<App />);
		const text = screen.findByText(/hello world!/i);

		expect(text).toBeInTheDocument();
	});
});