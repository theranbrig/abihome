import { render, screen, waitFor, act } from '@testing-library/react';
import Home from '../pages/index';
import { fetchApiData, mockImages } from '../__mocks__/api';
import DisplayCurrentImage from '../components/DisplayCurrentImage';
import ImageList from '../components/ImageList';
import PastImages from '../components/PastImages';

global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(mockImages) }));

beforeEach(() => {
  fetch.mockClear();
});

describe('Home', () => {
  it('renders without crashing', async () => {
    act(() => {
      render(<Home />);
    });
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});

describe('api', () => {
  it('calls the api correctly', async () => {
    const data = await fetchApiData();
    expect(data[0]).toEqual(mockImages[0]);
    expect(data[1]).toEqual(mockImages[1]);
    expect(data[2]).toEqual(mockImages[2]);
    expect(data[3]).toEqual(mockImages[3]);
    expect(data[4]).toEqual(mockImages[4]);
    expect(data[5]).toEqual(mockImages[5]);
  });
});

describe('CurrentImage', () => {
  it('displays the current image', () => {
    render(<DisplayCurrentImage currentImage={mockImages[0]} />);
    expect(screen.getByAltText('Selected Image')).toBeInTheDocument();
  });
  it('displays correctly with no image', () => {
    render(<DisplayCurrentImage currentImage={null} />);
    expect(screen.getByText('No Image Selected')).toBeInTheDocument();
  });
});

describe('ImageList', () => {
  it('displays the past images', () => {
    render(
      <ImageList images={mockImages} selectCurrentImage={jest.fn()} currentImage={mockImages[0]} />
    );
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(screen.getByAltText('Icon 1')).toBeInTheDocument();
    expect(screen.getByAltText('Icon 2')).toBeInTheDocument();
    expect(screen.getByAltText('Icon 3')).toBeInTheDocument();
    expect(screen.getByAltText('Icon 4')).toBeInTheDocument();
    expect(screen.getByAltText('Icon 5')).toBeInTheDocument();
    expect(screen.getByAltText('Icon 6')).toBeInTheDocument();
  });
  it('displays correctly with no image', () => {
    render(<ImageList images={[]} selectCurrentImage={jest.fn()} currentImage={mockImages[0]} />);
    expect(screen.getByText('Select an Image')).toBeInTheDocument();
  });
});

describe('ImageList', () => {
  it('displays the past images', () => {
    render(
      <PastImages
        imageHistory={mockImages}
        selectCurrentImage={jest.fn()}
        currentImage={mockImages[0]}
      />
    );
    expect(screen.getAllByRole('button')).toHaveLength(6);
    expect(screen.getByAltText('Previous Icon 1')).toBeInTheDocument();
    expect(screen.getByAltText('Previous Icon 2')).toBeInTheDocument();
    expect(screen.getByAltText('Previous Icon 3')).toBeInTheDocument();
    expect(screen.getByAltText('Previous Icon 4')).toBeInTheDocument();
    expect(screen.getByAltText('Previous Icon 5')).toBeInTheDocument();
    expect(screen.getByAltText('Previous Icon 6')).toBeInTheDocument();
  });
  it('displays correctly with no image', () => {
    render(<PastImages imageHistory={[]} selectCurrentImage={jest.fn()} />);
    expect(screen.getByText('No Previous Images')).toBeInTheDocument();
  });
});
